from fuzzywuzzy import fuzz
from fuzzywuzzy import process
from watson_developer_cloud import VisualRecognitionV3
from mariadb import MariaDBService
import csv
import os
import pandas as pd

class FuzzySearchService():
    def __init__(self, image):
        self.image = image
        #pull from database
        #get request to FOODS_API_BASE_URL=http://call-for-code-route-call-for-code.apps.shared-na46.openshift.opentlc.com
#        self.csv = '/Users/daliakhater/callforcode/call-for-code/flask/files/Food_Production_Cleanup.csv'
        self.classifier = VisualRecognitionV3('2018-03-19', iam_apikey=os.environ['IBM_VISION_API_KEY'])
       # self.df = pd.read_csv(self.csv, index_col=False)
        self.db = MariaDBService() # connect to db
        self.food_list = self.db.get_all_foods() # get food list
        self.prediction_foods,  self.fuzzy_predictions, self.predictions, self.carbon_emissions = [], [], [], []
        self.total_emissions = 0
        self.fuzzy_threshold = 75

    def read_csv(self):
        food_choice_df = self.df.iloc[:,0]
        food_list = food_choice_df.values.tolist()
        return food_list
    
    def pull_image_data(self):
        with open(self.image, 'rb') as images_file:
            classes = self.classifier.classify(images_file,threshold='0.6',classifier_ids='food').get_result()
        print(classes)
        return classes

    def find_watson_prediction_choices(self, classes):
        for entry in classes['images'][0]['classifiers'][0]['classes']:
            self.prediction_foods.append(entry['class'])
        return self.prediction_foods

    def find_prediction(self, food_list, prediction_foods):
        for currpred in prediction_foods:
            (food_prediction, score) = process.extractOne(currpred, food_list)
            if (score > self.fuzzy_threshold) and (food_prediction not in self.fuzzy_predictions):
                self.fuzzy_predictions.append(food_prediction)
        if not self.fuzzy_predictions:
            print('no results found')
            self.carbon_emissions = self.total_emissions = "NONE"
            SystemExit()
        return self.fuzzy_predictions

    def find_carbon_emission(self, fuzzy_predictions):
        for prediction in fuzzy_predictions:
            prediction_row = self.df[self.df['Food product'] == prediction]
            carbon_emission = prediction_row.Total_emissions.item()
            self.carbon_emissions.append([prediction, carbon_emission])
            self.total_emissions = self.total_emissions + carbon_emission
        return self.carbon_emissions, self.total_emissions


#fix so that it pulls from image captured from image captured from camera
search = FuzzySearchService(image='/Users/daliakhater/callforcode/call-for-code/flask/files/food/veggie-tray_01.jpeg')
# food_list = search.read_csv()
classes = search.pull_image_data()
prediction_foods = search.find_watson_prediction_choices(classes)
fuzzy_predictions = search.find_prediction(food_list, prediction_foods)
(carbon_emissions, total_emissions) = search.find_carbon_emission(fuzzy_predictions)
print("The carbon emmission for each food is:", carbon_emissions)
print("The total emissions for all captured foods are:", total_emissions)
