from flask import Flask,jsonify, request, make_response
from app.models.file_model import ImageModel
import base64

def home_view(app: Flask):


    @app.post("/")
    def create():

        data_file_names = list(request.files)
        data_files = request.files
   
        for file in data_file_names:
            file = ImageModel(filename =  file, image=data_files[file], hash='')
            file.save()        


        return "done!", 201

    @app.get("/")
    def get_all():

        all_files = ImageModel.objects().all()

        # print(all_files[0].image)

      
        # image_to_send= all_files[0].image.read()

        # print(type(image_to_send))

        # response = make_response(all_files[0].image.read())
        # response.headers.set('Content-Type', ' image/jpg')
        # response.headers.set(
        # 'Content-Disposition', 'attachment', filename='tigre.jpg')

        # return response , 200




        result = [{'filename' : file.filename, 'hash': file.hash, 'date': file.date, 'image': str(base64.b64encode(file.image.read()))} for file in all_files]

        # print(type(all_files[0].image))

        return jsonify(result) ,200