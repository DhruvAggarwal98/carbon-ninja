# Script to run the template with all parameters
PROJECT_NAME="dev"
oc delete project "${PROJECT_NAME}"
oc new-project "${PROJECT_NAME}"
oc create secret generic db-secret --from-literal=user=admin --from-literal=pass=pw
oc create secret generic ibm --from-literal=IBM_VISION_API_KEY=Ui2Dx29eKoCI_mhRnXOA0XblSamS63L_AOUCj6X4sOqA
oc create -f template.yml
oc new-app --template=call-for-code-template \
	-p BRANCH=backend/add-serving-size \
	-p NAME="${PROJECT_NAME}" \
	-p MYSQL_DATABASE=db \
        -p IBM_URL=https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/46c8e2ee-e7d8-4a8e-9c78-12982aff9133
