oc delete project/cfc
oc new-project cfc
oc new-app --name cfc --context-dir=flask https://github.com/jtorcass/call-for-code.git#feature/initialize-db
