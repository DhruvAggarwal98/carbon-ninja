from flask import request
from flask_restful import Resource
from services import MariaDBService

class Emissions(Resource):
  def __init__(self):
    self.db = MariaDBService()

  def post(self) -> dict:
    """Get food emission data

    Returns:
        dict: carbon emission data by food
    """    
    if not request.json or not 'foods' in request.json:
        abort(400)
    foods = request.json["foods"]
    return self.db.get_food_emissions(foods)

