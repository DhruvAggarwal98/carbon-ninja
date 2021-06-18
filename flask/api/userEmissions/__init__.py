import os
from flask import Flask, request, jsonify, abort
from flask_restful import Resource, Api
from services import MariaDBService
from services import UserEmissionsService

# Interact with user tables
class UserEmissions(Resource):
  def __init__(self):
    self.service = UserEmissionsService()

  # Get emissions of food - POST to take in array
  def get(self, id):
    return self.service.get_user_emissions(id)

  # Log users entry
  def post(self, id):
    data = request.json
    if not "emissions" in data:
      abort(400)
    return self.service.log_user_entry(id, data)

