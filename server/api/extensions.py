from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from api.errors import http_error
from config import get_api_config

def init_extensions(app: Flask):
    config = get_api_config("jwt")
    jwt = JWTManager(app)

    app.config["JWT_SECRET_KEY"] = config["secret_key"] # Secret key for signing tokens
    app.config["JWT_TOKEN_LOCATION"] = config["token_location"] # Indicate that JWTs are stored in a cookie
    app.config["JWT_COOKIE_SECURE"] = config["cookie_secure"] # Set True for production (HTTPS only)
    app.config["JWT_COOKIE_CSRF_PROTECT"] = config["cookie_csrf_protect"] # Disable CSRF protection for Postman (to be activated later)

    @jwt.invalid_token_loader
    def invalid_token(error):
        return http_error(401, "UNAUTHORIZED", "INVALID_TOKEN")

    @jwt.expired_token_loader
    def expired_token(jwt_header, jwt_payload):
        return http_error(401, "UNAUTHORIZED", "TOKEN_EXPIRED")

    @jwt.unauthorized_loader
    def missing_token(error):
        return http_error(401, "UNAUTHORIZED", "TOKEN_MISSING")

    config = get_api_config("cors")
    CORS(
        app,
        origins=config["origins"],
        allow_headers=config["allow_headers"],
        allow_methods=config["allow_methods"],
        supports_credentials=config["supports_credentials"]
    )
