from flask import Flask
from flask_cors import CORS
import os

from app.routes.upload import register_upload_route
from app.routes.transcribe import register_transcribe_route

def create_app():
    app = Flask(__name__)
    CORS(app)

    # calling the routes
    register_upload_route(app)
    register_transcribe_route(app)


    return app