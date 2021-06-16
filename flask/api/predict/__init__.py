import os
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from watson_developer_cloud import VisualRecognitionV3
from services import FuzzySearchService
from services import MariaDBService

class Predict(Resource):
  def __init__(self):
    self.classifier = VisualRecognitionV3(
      '2018-03-19',
      iam_apikey=os.environ['IBM_VISION_API_KEY'],
      url=os.environ['IBM_VISION_URL']
    )
    self.search = FuzzySearchService()
    self.db = MariaDBService()

  def post(self):
    file_content = request.files['image']
    classes = self.classifier.classify(file_content, threshold='0.6', classifier_ids='food')
    resp_json = classes.get_result()
    fuzzy_preds = self.search.get_fuzzy_prediction(resp_json) # list of predicted foods
    return self.db.get_food_emissions(fuzzy_preds)
