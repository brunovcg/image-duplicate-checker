from flask import Flask,jsonify, request, make_response
from app.models.file_model import ImageModel
from app.models.approve_model import ApproveModel
import os
from dotenv import load_dotenv
import uuid
from datetime import datetime
from mongoengine import connect
from app.controllers.image_hash_mock import generate_mocked_hash
from flask_cors import cross_origin, CORS
import json

load_dotenv()

configs={
    'baseURL' : os.getenv('APP_HOST_ADDRESS'),
    'db' : os.getenv('DB'),
    'host': os.getenv('DB_HOST'),
    'origins': json.loads(os.getenv('CORS_ORIGINS'))
}


connect(db=configs['db'], host=configs['host'])

def home_view(app: Flask):

    CORS(app
        ,

        resources={
        r"/images/*": {"origins": configs['origins']}

    }
    )


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

            image_id = uuid.uuid4().urn[9:]

            # exists:bool

           

            
            if len(ImageModel.objects(hash= image_hash)) == 0:
   
                item = ImageModel(
                    imageId = image_id,
                    packageName = data_file_names[index],
                    image = data_files[file],
                    hash = ImageModel.getHash(file),
                    filename = ImageModel.getName(data_dict[data_file_names[index]].filename),
                    extension = ImageModel.getExtension(data_dict[data_file_names[index]].filename),
                    creation_date = datetime.utcnow()
                    )

                uploaded_to_db.append({'filename' : file_extension, 'image_id': image_id, "image_hash" : image_hash})

                item.save()

            if len(ImageModel.objects(hash= image_hash)) > 0:
                item = ApproveModel(
                    imageId = image_id,
                    packageName = data_file_names[index],
                    image = data_files[file],
                    hash = ImageModel.getHash(file),
                    filename = ImageModel.getName(data_dict[data_file_names[index]].filename),
                    extension = ImageModel.getExtension(data_dict[data_file_names[index]].filename),
                    creation_date = datetime.utcnow()
                    )

                need_approval.append({'filename' : file_extension, 'image_id': image_id, "image_hash" : image_hash})

                item.save()
            

            # try:
            #     ImageModel.objects(hash= image_hash)
            #     exists = True

            # except Exception:
            #     exists = False

            # if not exists:
            #     item = ImageModel(
            #         imageId = image_id,
            #         packageName = data_file_names[index],
            #         image = data_files[file],
            #         hash = ImageModel.getHash(file),
            #         filename = ImageModel.getName(data_dict[data_file_names[index]].filename),
            #         extension = ImageModel.getExtension(data_dict[data_file_names[index]].filename),
            #         creation_date = datetime.utcnow()
            #         )

            #     uploaded_to_db.append({'filename' : file_extension, 'image_id': image_id, "image_hash" : image_hash})

            #     item.save()

            # if exists:
            #     item = ApproveModel(
            #         imageId = image_id,
            #         packageName = data_file_names[index],
            #         image = data_files[file],
            #         hash = ImageModel.getHash(file),
            #         filename = ImageModel.getName(data_dict[data_file_names[index]].filename),
            #         extension = ImageModel.getExtension(data_dict[data_file_names[index]].filename),
            #         creation_date = datetime.utcnow()
            #         )

            #     need_approval.append({'filename' : file_extension, 'image_id': image_id, "image_hash" : image_hash})

            #     item.save()


        return jsonify({'uploaded_to_db': uploaded_to_db, 'need_approval' : need_approval}), 201

    @app.post("/images/approval/<image_Id>")
    def aprove_to_db(image_Id):

        try:
            get_file = ApproveModel.objects().get(imageId = image_Id)

            ApproveModel.objects(imageId = image_Id).delete()

            item = ImageModel(
                imageId = get_file['imageId'],
                packageName = get_file['packageName'],
                image = get_file['image'],
                hash = get_file['hash'],
                filename = get_file['filename'],
                extension = get_file['extension'],
                creation_date = get_file['creation_date']
                )

            item.save()
            return jsonify({'msg' : "Item saved on database"}), 200

        except Exception:
            return jsonify({'msg' : "Item not found"}), 404


    @app.delete("/images/approval/<image_Id>")
    def delete_from_line(image_Id):
        try:
            get_file = ApproveModel.objects().get(imageId = image_Id)

            ApproveModel.objects(imageId = image_Id).delete()

        except Exception:
            return jsonify({'msg' : "Item not found"}), 404

        return jsonify({"msg" : "Image deleted from line"}), 204


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


    @app.get("/images/approval")
    def get_all_in_line():

        approve_files = ApproveModel.objects().all()

        if len(approve_files) == 0:
            return jsonify([]), 200

        result = [{
            'imageId' : file.imageId,
            'filename' : f'{file.filename}.{file.extension}',
            'hash': file.hash,
            'date': file.creation_date,
            'image': f'{configs["baseURL"]}/images/approval/{file.imageId}',
            'images_duplicate' : [{
                'image': f'{configs["baseURL"]}/images/{duplicate.imageId}',
                'hash' : duplicate.hash,
                'imageId': duplicate.imageId
                } for duplicate in ImageModel.objects(hash=file.hash).all()]
        } for file in approve_files]

        return jsonify(result) ,200


    @app.get('/images/<image_id>')
    def get_show_db(image_id):

        file = ImageModel.objects.get(imageId = image_id)

        response = make_response(file.image.read())
        response.headers.set('Content-Type', ' image/jpg')
        response.headers.set(
        'Content-Disposition', '' ,filename=f'{file.filename}.{file.extension}')

        return  response, 200

    @app.get('/images/approval/<image_id>')
    def get_show_db_approval_line(image_id):

        file = ApproveModel.objects.get(imageId = image_id)

        response = make_response(file.image.read())
        response.headers.set('Content-Type', ' image/jpg')
        response.headers.set(
        'Content-Disposition', '' ,filename=f'{file.filename}.{file.extension}')

        return  response, 200



    @app.post('/images/generate-hash-mock')
    # @cross_origin(origin='*',headers=['Content-Type','Authorization'])
    def generate_hash_mock():

        data_file = request.files
        data_file_name = list(request.files)

        image_hash = str(generate_mocked_hash(data_file[data_file_name[0]]))

        response = jsonify({"image_hash" : image_hash})

        response.headers.add("Access-Control-Allow-Origin", "*")

        return  response, 200
