from flask import Flask,jsonify, request, make_response
from app.models.file_model import ImageModel
from app.models.aprove_model import AproveModel
import os
from dotenv import load_dotenv
import uuid
from datetime import datetime
from mongoengine import connect

load_dotenv()

configs={
    'baseURL' : os.getenv('APP_HOST_ADDRESS'),
    'db' : os.getenv('DB'),
    'host': os.getenv('DB_HOST')
}

connect(db=configs['db'], host=configs['host'])

def home_view(app: Flask):

    @app.post("/images")
    def create():

        data_file_names = list(request.files)
        data_files = request.files
        data_dict = dict(data_files)

        uploaded_to_db = []
        need_approval = []
   
        for index, file in enumerate(data_file_names):   

            image_hash = ImageModel.getHash(file)

            file_extension = data_dict[data_file_names[index]].filename

            try:
                check_file = ImageModel.objects().get(hash= image_hash)
                
                item = ImageModel(
                    imageId = uuid.uuid4().urn[9:],
                    packageName = data_file_names[index],
                    image = data_files[file],
                    hash = ImageModel.getHash(file),
                    filename = ImageModel.getName(data_dict[data_file_names[index]].filename),
                    extension = ImageModel.getExtension(data_dict[data_file_names[index]].filename),
                    creation_date = datetime.utcnow()
                    )

                uploaded_to_db.append(file_extension)

                item.save() 

            except Exception:

                item = AproveModel(
                    imageId = uuid.uuid4().urn[9:],
                    packageName = data_file_names[index],
                    image = data_files[file],
                    hash = ImageModel.getHash(file),
                    filename = ImageModel.getName(data_dict[data_file_names[index]].filename),
                    extension = ImageModel.getExtension(data_dict[data_file_names[index]].filename),
                    creation_date = datetime.utcnow()
                    )

                need_approval.append(file_extension)

                item.save() 

       

        return jsonify({'uploaded_to_db': uploaded_to_db, 'need_approval' : need_approval}), 201

    @app.post("/images/approval")
    def aprove_to_db():

        return "", 201


    @app.get("/images")
    def get_all():

        all_files = ImageModel.objects().all()        

        result = [{
            'imageId' : file.imageId,
            'filename' : f'{file.filename}.{file.extension}',
            'hash': file.hash, 'date': file.creation_date,
            'image': f'{configs["baseURL"]}/images/{file.imageId}'
        } for file in all_files]
               

        return jsonify(result) ,200

    @app.get('/images/<image_id>')
    def get_one(image_id):

        file = ImageModel.objects.get(imageId = image_id)

        response = make_response(file.image.read())
        response.headers.set('Content-Type', ' image/jpg')
        response.headers.set(
        'Content-Disposition', '' ,filename=f'{file.filename}.{file.extension}')

        return  response, 200