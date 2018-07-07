import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPLISTS,
    RECEIVE_NAVIGATION
} from "./mutation-type";

import { getAddress } from "../api/";
export default {
    async  getAddress({ commit, state }) {
        console.log(state);
        
        let { longitude, latitude } = state;
        let result = await getAddress(longitude + "," + latitude);
        let address = result.data;
        commit(RECEIVE_ADDRESS, { address });
    }
}