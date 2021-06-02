from fuzzywuzzy import fuzz
from fuzzywuzzy import process
from watson_developer_cloud import VisualRecognitionV3
import csv
import os
import pandas as pd

class FuzzySearchService():
    def __init__(self, image):
        self.image = image
        #pull from database
        #get request to FOODS_API_BASE_URL=http://call-for-code-route-call-for-code.apps.shared-na46.openshift.opentlc.com
        self.csv = '/Users/daliakhater/callforcode/call-for-code/flask/files/Food_Production_Cleanup.csv'
        self.classifier = VisualRecognitionV3('2018-03-19',iam_apikey=os.environ['IBM_VISION_API_KEY'])
        self.df = pd.read_csv(self.csv, index_col=False)
        self.prediction_foods = []
        self.fuzzy_prediction_score = []

    def read_csv(self):
        food_choice_df = self.df.iloc[:,0]
        food_list = food_choice_df.values.tolist()
        return food_list
    
    #fix so that it pulls from image captured from image captured from camera
    def pull_image_data(self):
        with open(self.image, 'rb') as images_file:
            classes = self.classifier.classify(images_file,threshold='0.6',classifier_ids='food').get_result()
        return classes

    def find_watson_prediction_choices(self, classes):
        for entry in classes['images'][0]['classifiers'][0]['classes']:
            self.prediction_foods.append(entry['class'])

        print(self.prediction_foods)
        return self.prediction_foods

    def find_prediction(self, food_list, prediction_foods):
        for currpred in prediction_foods:
            (food_prediction, score) = process.extractOne(currpred, food_list)
            if score > 70:
                self.fuzzy_prediction_score.append(process.extractOne(currpred, food_list))
        self.fuzzy_prediction_score = [item[::-1] for item in self.fuzzy_prediction_score]
        self.fuzzy_prediction_score.sort(key=None, reverse=True)
        (score, prediction) = self.fuzzy_prediction_score[0]
        if not self.fuzzy_prediction_score:
            print('no results found')
            return False
        return prediction

    def find_carbon_emission(self, prediction):
        carbon_emission = self.df[self.df['Food product'] == prediction]
        return carbon_emission


search = FuzzySearchService(image='/Users/daliakhater/callforcode/call-for-code/flask/files/fruit.jpg')
food_list = search.read_csv()
classes = search.pull_image_data()
prediction_foods = search.find_watson_prediction_choices(classes)
prediction = search.find_prediction(food_list, prediction_foods)
carbon_emission = search.find_carbon_emission(prediction)
print(carbon_emission)
