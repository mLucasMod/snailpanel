from flask import Flask

from api.app.auth.routes import auth_bp
from api.app.users.routes import user_bp

def register_routes(app: Flask):
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(user_bp, url_prefix='/users')