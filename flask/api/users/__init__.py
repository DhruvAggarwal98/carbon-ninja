import os
from flask import Flask, request, jsonify, abort
from flask_restful import Resource, Api
from services import MariaDBService
from services import UserService

# Interact with user tables
class Users(Resource):
  def __init__(self):
    self.service = UserService()

  # Get emissions of food - POST to take in array
  def get(self, id):
    return self.service.get_user_emissions(id)

