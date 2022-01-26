from flask_restful import Resource
from services import MariaDBService

class Foods(Resource):
  def __init__(self):
    self.db = MariaDBService()

  def get(self):
    """Get all foods - used to populate app drop-down

    Returns:
        list: foods with known carbon emissions data
    """    
    return self.db.get_all_foods()
