import os
from dotenv import load_dotenv
from mongoengine import Document, fields


load_dotenv()

configs={
    'collection' :  os.getenv('COLLECTION')
}

class ImageModel(Document):
        
    meta = {"collection" : configs['collection']}

    imageId = fields.StringField(required=True)
    packageName = fields.StringField(required=True)
    filename = fields.StringField(required=True)
    hash =fields.StringField()
    image = fields.ImageField(thumbnail_size=(150,150, False))
    extension = fields.StringField()
    creation_date = fields.DateField(required=True)


    @staticmethod
    def getHash(string:str):
        hash = "".join(string.split('.')[1])
        return hash

    @staticmethod
    def getName(string:str):
        name = "".join(string.split('.')[0])
        return name

    @staticmethod
    def getExtension(string:str):
        extension = "".join(string.split('.')[1])
        return extension
