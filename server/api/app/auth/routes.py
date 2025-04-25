from datetime import timedelta
from flask import Blueprint, abort, jsonify, make_response, request
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from api.app.auth.controller import AuthController

auth_bp = Blueprint('auth', __name__)

@auth_bp.route("/", methods=["POST"])
async def login():
    data = request.json
    login: str = data.get("login")
    password: str = data.get("password")

    if not login or not password:
        abort(401)

    user = await AuthController.findUser(login, password)

    if not user:
        abort(401)

    access_token = create_access_token(identity=user.username, expires_delta=timedelta(hours=2))

    # TODO get from config file
    # Set a secure HttpOnly cookie
    response = make_response()
    response.set_cookie(
        "access_token_cookie",
        access_token,
        httponly=True, # Prevent JavaScript from accessing the cookie
        secure=False, # To be deactivated in development (localhost does not support Secure)
        samesite="Strict", # Prevent CSRF attacks
        max_age=7200 # 2 hours
    )

    return response

@auth_bp.route("/", methods=["DELETE"])
def logout():
    response = make_response()
    response.set_cookie("access_token_cookie", "", expires=0)
    return response

@auth_bp.route("/", methods=["GET"])
@jwt_required(optional=True)
def check():
    current_user = get_jwt_identity()
    return jsonify({
        "authenticated": bool(current_user),
        "user": current_user
    })
