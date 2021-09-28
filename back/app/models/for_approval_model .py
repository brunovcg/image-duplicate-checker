
from file_model import ImageModel
import os
from dotenv import load_dotenv
from mongoengine import connect, Document, fields


load_dotenv()

configs={
    'db' : os.getenv('DB_APROVAL_LINE'),
    'host': os.getenv('DB_HOST'),
    'collection' :  os.getenv('COLLECTION_APPROVAL_LINE')
}

connect(db=configs['db'], host=configs['host'])

class AprovalLineModel(ImageModel(Document)):

        
    meta = {"collection" : configs['collection']}

  