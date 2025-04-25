from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import get_api_config

def init_extensions(app: Flask):
    config = get_api_config("jwt")
    jwt = JWTManager(app)

    app.config["JWT_SECRET_KEY"] = config["secret_key"] # Secret key for signing tokens
    app.config["JWT_TOKEN_LOCATION"] = config["token_location"] # Indicate that JWTs are stored in a cookie
    app.config["JWT_COOKIE_SECURE"] = config["cookie_secure"] # Set True for production (HTTPS only)
    app.config["JWT_COOKIE_CSRF_PROTECT"] = config["cookie_csrf_protect"] # Disable CSRF protection for Postman (to be activated later)

    @jwt.expired_token_loader
    def expired_token(jwt_header, jwt_payload):
        return (
            jsonify({"status": 401, "error": "TOKEN_EXPIRED"}), 401,
        )
    @jwt.invalid_token_loader
    def invalid_token(error):
        return (
            jsonify({"status": 401, "error": "INVALID_TOKEN"}), 401,
        )
    @jwt.unauthorized_loader
    def missing_token(error):
        return (
            jsonify({"status": 401, "error": "TOKEN_MISSING",}), 401,
        )

    config = get_api_config("cors")
    CORS(
        app,
        origins=config["origins"],
        allow_headers=config["allow_headers"],
        allow_methods=config["allow_methods"],
        supports_credentials=config["supports_credentials"]
    )
