import os
from dotenv import load_dotenv
from mongoengine import Document, fields

load_dotenv()

configs={
    'db' : os.getenv('DB'),
    'host': os.getenv('DB_HOST'),
    'collection' :  os.getenv('COLLECTION_APPROVAL_LINE')
}

class AproveModel(Document):
    meta = {"collection" : configs['collection']}

    imageId = fields.StringField(required=True)
    packageName = fields.StringField(required=True)
    filename = fields.StringField(required=True)
    hash =fields.StringField()
    image = fields.ImageField(thumbnail_size=(150,150, False))
    extension = fields.StringField()
    creation_date = fields.DateField(required=True)
