import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPLISTS,
    RECEIVE_NAVIGATION,
    RECEIVE_USER_DATA,
    CLEAR_USER_DATA,
    RECEIVE_SHOP_EVALUATE,
    RECEIVE_SHOP_FOOD_LIST,
    RECEIVE_SHOP_INFO,
    RECEIVE_SHOPPING_CART
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
    [RECEIVE_SHOP_EVALUATE](state, { shopEvaluate }) {

        state.shopEvaluate = shopEvaluate;
    },
    [RECEIVE_SHOP_FOOD_LIST](state, { shopFoodList }) {

        state.shopFoodList = shopFoodList;
    },
    [RECEIVE_SHOP_INFO](state, { shopInfo }) {

        state.shopInfo = shopInfo;
    },
    [RECEIVE_SHOPPING_CART](state, { shoppingCart }) {

        state.shoppingCart = shoppingCart;
    },
}