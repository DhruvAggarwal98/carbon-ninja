# Script to run the template with all parameters
oc delete project/call-for-code
sleep 10
PROJECT_NAME="call-for-code"
oc new-project "${PROJECT_NAME}"
oc create secret generic db-secret --from-literal=user=admin --from-literal=pass=pw
oc create -f template.yml
oc new-app --template=call-for-code-template \
	-p NAME="${PROJECT_NAME}" \
	-p MYSQL_DATABASE=db
#oc start-build bc/api-bugfix

