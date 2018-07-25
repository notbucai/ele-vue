import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPLISTS,
    RECEIVE_NAVIGATION,
    RECEIVE_USER_DATA,
    CLEAR_USER_DATA,
    RECEIVE_SHOP_EVALUATE,
    RECEIVE_SHOP_FOOD_LIST,
    RECEIVE_SHOP_INFO,
    RECEIVE_SHOPPING_CART,
} from "./mutation-type";

import {
    getAddress,
    getNavigation,
    getShoplists,
    getUserData,
    getShopEvaluate,
    getShopFoodList,
    getShopInfo,
    getShoppingCart,
} from "../api/";
export default {
    async getAddress({ commit, state }) {
        console.log(state);

        let { longitude, latitude } = state;
        let result = await getAddress(longitude + "," + latitude);
        let address = result.data;
        commit(RECEIVE_ADDRESS, { address });
    },
    async getNavigation({ commit, state }) {
        console.log(state);

        let { longitude, latitude } = state;
        let result = await getNavigation(longitude + "," + latitude);
        const navigation = [];
        let i = 0, j = 0;

        result.forEach(element => {
            if (i % 10 == 0) {
                navigation.push([]);
                if (i !== 0) {
                    j++;
                }
            }
            navigation[j].push(element);
            i++;
        });

        commit(RECEIVE_NAVIGATION, { navigation });
    },
    async getShoplists({ commit, state }) {
        console.log(state);

        let { longitude, latitude } = state;
        let result = await getShoplists(longitude + "," + latitude);
        const shoplists = result.items;

        commit(RECEIVE_SHOPLISTS, { shoplists });
    },
    async updateShoplists({ commit, state }) {

        let { longitude, latitude, shoplists } = state;
        //todo 暂时调用原接口，获取数据后合并
        let result = await getShoplists(longitude + "," + latitude);
        //
        // console.log(result.items,shoplists);

        shoplists = shoplists.concat(result.items);

        // console.log(shoplists);
        commit(RECEIVE_SHOPLISTS, { shoplists });
    },
    async getUserData({ commit }) {
        let result = await getUserData();

        let userData = result || {};
        if (userData.code === 0) {
            commit(RECEIVE_USER_DATA, { userData });
        }
    },
    async clearUserData({ commit }) {
        //发送推出登陆请求到服务器
        commit(CLEAR_USER_DATA);
    },

    async getShopEvaluate({ commit }, id) {
        let result = await getShopEvaluate(id);

        // console.log(result);
        if (result.code == 200) {
            let shopEvaluate = JSON.parse(result.body || '{}');;
            commit(RECEIVE_SHOP_EVALUATE, { shopEvaluate });
        }

    },
    async getShopFoodList({ commit }, id) {
        let result = await getShopFoodList(id);

        // console.log(result);
        if (result.code == 200) {
            let shopFoodList = JSON.parse(result.body || '{}');;
            commit(RECEIVE_SHOP_FOOD_LIST, { shopFoodList });
        }
        // commit(RECEIVE_SHOP_EVALUATE, { result });
    },
    async getShopInfo({ commit }, id) {
        let result = await getShopInfo(id);

        // console.log(result);
        if (result.code == 200) {
            let shopInfo = JSON.parse(result.body || '{}');;
            commit(RECEIVE_SHOP_INFO, { shopInfo });
        }
        // commit(RECEIVE_SHOP_EVALUATE, { result });
    },
    async getShoppingCart({ commit }, id) {
        let result = await getShoppingCart(id);

        // console.log(result);
        if (result.code == 200) {
            let shoppingCart = JSON.parse(result.body || '{}');
            commit(RECEIVE_SHOPPING_CART, { shoppingCart });
        }
        // commit(RECEIVE_SHOP_EVALUATE, { result });
    }
}
