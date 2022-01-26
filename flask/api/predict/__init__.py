import os
from flask import request, jsonify
from flask_restful import Resource
from watson_developer_cloud import VisualRecognitionV3

class Predict(Resource):
  def __init__(self):
    self.classifier = VisualRecognitionV3(
      '2018-03-19',
      iam_apikey=os.environ['IBM_VISION_API_KEY'],
      url=os.environ['IBM_VISION_URL']
    )

  def post(self) -> dict:
    """Post an image to IBM Watson visual recognition API for classification.

    Returns:
        dict: image classification using foods recognition module
    """    
    file_content = request.files['image']
    classes = self.classifier.classify(file_content, threshold='0.6', classifier_ids='food')
    return jsonify(classes.get_result())