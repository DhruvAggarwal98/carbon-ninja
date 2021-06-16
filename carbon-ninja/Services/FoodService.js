import {FOODS_API_BASE_URL} from '@env'

export default class FoodService {
    async get_all_foods() {
        response = await fetch(FOODS_API_BASE_URL + '/foods', {
            method: 'GET'
        }).catch((reason) => {
            console.log(reason);
        });
        let json = await response.json();
        return json;
    }

    async get_emissions() {
        return 'hello';
	response = await fetch(FOODS_API_BASE_URL + '/emissions', {
            method: 'POST'
        }).catch((reason) => {
            console.log(reason);
        });
        let json = await response.json();
        return json;
    }

}
