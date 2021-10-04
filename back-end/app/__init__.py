from flask import Flask
from flask_cors import CORS

from app import views

def create_app():
    app = Flask(__name__)




    app.config["JSON_SORT_KEYS"] = False
    app.config['CORS_HEADERS'] = 'Content-Type'

    views.init_app(app)

    return app
