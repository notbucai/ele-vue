import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPLISTS,
    RECEIVE_NAVIGATION,
    RECEIVE_USER_DATA,
    CLEAR_USER_DATA
} from "./mutation-type";

export default {
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address;
    },
    [RECEIVE_NAVIGATION](state, { navigation }) {

        state.navigation = navigation;
    },
    [RECEIVE_SHOPLISTS](state, { shoplists }) {
        state.shoplists = shoplists;
    },
    [RECEIVE_USER_DATA](state, { userData }) {

        state.userData = userData;
    },
    [CLEAR_USER_DATA](state) {
        state.userData = {
            code: -1
        };
    },
}