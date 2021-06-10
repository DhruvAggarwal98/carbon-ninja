import os
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from services import MariaDBService

# Foods
# shows a list of all foods, and lets you POST to add a new food
class Emissions(Resource):
  def __init__(self):
    self.db = MariaDBService()

  # Get emissions of food - POST to take in array
  def post(self):
    print(request.json)
    items = []
    items.append("Apples")
    items.append("Yams")
    return self.db.get_food_emissions(items)

