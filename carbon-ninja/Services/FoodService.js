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
}