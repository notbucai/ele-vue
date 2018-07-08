import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPLISTS,
    RECEIVE_NAVIGATION
} from "./mutation-type";

import { getAddress, getNavigation } from "../api/";
export default {
    async  getAddress({ commit, state }) {
        console.log(state);

        let { longitude, latitude } = state;
        let result = await getAddress(longitude + "," + latitude);
        let address = result.data;
        commit(RECEIVE_ADDRESS, { address });
    },
    async  getNavigation({ commit, state }) {
        console.log(state);

        let { longitude, latitude } = state;
        let result = await getNavigation(longitude + "," + latitude);
        const navigation = [];
        let i = 0, j = 0;

        result.forEach(element => {
            if (i % 10 == 0) {
                navigation.push([]);	
                  if(i!==0){
                      j++;
                  }
              }
              navigation[j].push(element);
              i++;
        });

        commit(RECEIVE_NAVIGATION, { navigation });
    }
}