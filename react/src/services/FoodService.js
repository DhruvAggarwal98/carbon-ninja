export default class FoodService {
    constructor() {
        this.base_url = 'http://call-for-code-route-call-for-code.apps.shared-na46.openshift.opentlc.com';
    }

    async get_all_foods() {
        response = await fetch(this.base_url + '/foods', {
            method: 'GET'
        });
        json = await response.json();
        return json;
    }
}