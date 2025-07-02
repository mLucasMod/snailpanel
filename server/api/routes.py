from flask import Flask, send_from_directory

from api.app.auth.routes import auth_bp
from api.app.servers.routes import server_bp
from api.app.users.routes import user_bp

def register_routes(app: Flask):
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(server_bp, url_prefix='/servers')
    app.register_blueprint(user_bp, url_prefix='/users')

    @app.route("/favicon.ico", methods=["GET"])
    def favicon():
        return send_from_directory(app.root_path + '/static', 'favicon.ico')
