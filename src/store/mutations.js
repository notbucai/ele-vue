import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPLISTS,
    RECEIVE_NAVIGATION
} from "./mutation-type";

export default {
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address;
    }
}