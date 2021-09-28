from flask import Flask,jsonify, request, make_response
from app.models.file_model import ImageModel
import os
from dotenv import load_dotenv
import uuid
from datetime import datetime

load_dotenv()

configs={
    'baseURL' : os.getenv('APP_HOST_ADDRESS')
}


def home_view(app: Flask):


    @app.post("/images")
    def create():

        data_file_names = list(request.files)
        data_files = request.files
        data_dict = dict(data_files)
   
        for index, file in enumerate(data_file_names):
            item = ImageModel(
                imageId = uuid.uuid4().urn[9:],
                packageName = data_file_names[index],
                image = data_files[file],
                hash = ImageModel.getHash(file),
                filename = ImageModel.getName(data_dict[data_file_names[index]].filename),
                extension = ImageModel.getExtension(data_dict[data_file_names[index]].filename),
                creation_date = datetime.utcnow()
                )

            item.save()        

        return jsonify({'uploaded': [], 'aproval' : []}), 201


    @app.get("/images")
    def get_all():

        all_files = ImageModel.objects().all()        

        result = [{
            'filename' : file.filename,
            'hash': file.hash, 'date': file.creation_date,
            'image': f'{configs["baseURL"]}/images/{file.imageId}'
        } for file in all_files]

        print(f'>>>>>>>>>>>{configs["baseURL"]}')
        

        return jsonify(result) ,200

    @app.get('/images/<image_id>')
    def get_one(image_id):

        file = ImageModel.objects.get(imageId = image_id)


        response = make_response(file.image.read())
        response.headers.set('Content-Type', ' image/jpg')
        response.headers.set(
        'Content-Disposition', '' ,filename=f'{file.filename}.{file.extension}')

        return  response, 200