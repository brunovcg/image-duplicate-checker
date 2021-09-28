from datetime import datetime
from mongoengine import connect, Document, fields

connect(db="hapvida", host="mongodb://localhost:27017/")

class ImageModel(Document):

        
    meta = {"collection" : "hapvida_images"}

    filename = fields.StringField(required=True)
    hash =fields.StringField(required=False)
    image = fields.ImageField(thumbnail_size=(150,150, False))
    date = datetime.utcnow()