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

    async saveEntry(entry, uid) {
      response = await fetch(FOODS_API_BASE_URL + '/users/' + uid + '/emissions', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: '{ "emissions": ' + entry["total"] + ' }'
      }).catch((error) => {
        console.error(error);
      });
      let ret = await response.text();
      return ret;

    }

}
