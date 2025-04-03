from api.errors import register_errors
from api.routes import register_routes
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import get_config

class Api:
    def __init__(self):
        self.app = Flask(__name__)

        self.init_config()
        self.init_extensions()

        register_errors(self.app)
        register_routes(self.app)

    def init_config(self):
        self.app.config["JWT_SECRET_KEY"] = "1234" # Clé secrète pour signer les tokens
        self.app.config["JWT_TOKEN_LOCATION"] = ["cookies"] # Indique que les JWT sont stockés dans un cookie
        self.app.config["JWT_COOKIE_SECURE"] = False  # ⚠ À mettre sur True en production (HTTPS uniquement)
        self.app.config["JWT_COOKIE_CSRF_PROTECT"] = False  # Désactive la protection CSRF pour Postman (à activer plus tard)
        
    def init_extensions(self):
        jwt = JWTManager(self.app)
        CORS(self.app, supports_credentials=True)

    def run(self):
        config = get_config("flask")

        self.app.run(
            host=config.get("host", "127.0.0.1"),
            port=config.get("port", 5000),
            debug=config.get("debug", False)
        )