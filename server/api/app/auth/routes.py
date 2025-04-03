from datetime import timedelta
from flask import Blueprint, abort, jsonify, make_response, request
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

auth_bp = Blueprint('auth', __name__)

users_db = {
    "root": "1234",
    "test": "1234"
}

@auth_bp.route("/", methods=["POST"])
def login():
    data = request.json
    username: str = data.get("username")
    password: str = data.get("password")

    if username not in users_db:
        abort(401)

    if (password != users_db[username]):
        abort(401)

    access_token = create_access_token(identity=username, expires_delta=timedelta(hours=2))

    # Définir un cookie HttpOnly sécurisé
    response = make_response(jsonify({"message": "Connexion réussie"}))
    response.set_cookie(
        "access_token_cookie",
        access_token,
        httponly=True, # Empêche JavaScript d'accéder au cookie
        secure=False, # ⚠ À désactiver en développement (localhost ne supporte pas Secure)
        samesite="Strict", # Empêche les attaques CSRF
        max_age=7200 # Expire dans 2h
    )

    return response

@auth_bp.route("/", methods=["DELETE"])
def logout():
    response = make_response(jsonify({"message": "Déconnexion réussie"}))
    response.set_cookie("access_token_cookie", "", expires=0)
    return response

@auth_bp.route("/", methods=["GET"])
@jwt_required()
def check():
    current_user = get_jwt_identity()
    return jsonify({"authenticated": True, "user": current_user})