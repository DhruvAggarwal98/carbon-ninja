# Script to run the template with all parameters
PROJECT_NAME="call-for-code"
oc new-project "${PROJECT_NAME}"
oc create secret generic db-secret --from-literal=user=admin --from-literal=pass=pw
oc create -f template.yml
oc new-app --template=call-for-code-template \
	-p BRANCH=feature/initialize-db \
	-p NAME="${PROJECT_NAME}" \
	-p MYSQL_DATABASE=db 

