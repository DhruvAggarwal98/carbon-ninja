import { FOODS_API_BASE_URL } from '@env'

export default class FoodService {
    async get_all_foods() {
        response = await fetch(FOODS_API_BASE_URL + '/foods', {
            method: 'GET'
        });
        let json = await response.json();
        return json;
    }
}