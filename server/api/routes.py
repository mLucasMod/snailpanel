from flask import Flask, request, jsonify
from controllers import UserController, ServerController, TemplateController

app = Flask(__name__)

@app.route('/api/users', methods=['GET'])
def get_users():
    """Route pour obtenir la liste des utilisateurs"""
    users = UserController.getAllUsers()
    return jsonify(users), 200

@app.route('/api/users', methods=['POST'])
def create_user():
    """Route pour créer un nouvel utilisateur"""
    data = request.json
    new_user = UserController.create_user(data)
    return jsonify(new_user), 201

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    """Route pour obtenir un utilisateur par son ID"""
    user = UserController.getUserById(user_id)
    if user:
        return jsonify(user), 200
    return jsonify({"error": "User not found"}), 404

@app.route('/api/users/<int:user_id>', methods=['DELETE'])
def create_user():
    """Route pour supprimer un utilisateur"""
    data = request.json
    new_user = UserController.create_user(data)
    return jsonify(new_user), 201