import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPLISTS,
    RECEIVE_NAVIGATION,
    RECEIVE_USER_DATA,
    CLEAR_USER_DATA
} from "./mutation-type";

import {
    getAddress,
    getNavigation,
    getShoplists,
    getUserData,
    getTest
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
    async getTestA(){
        console.log(await getTest());
        
    }
}