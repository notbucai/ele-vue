import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    count: 2
};
const mutations = {
    ADD(state) {
        state.count++;
    },

    MINUS(state) {
        state.count--;
    }
};
const actions = {
    add({ commit, state }) {
        commit('ADD');
    },
    minus({ commit, state }) {
        commit('MINUS')
    },
    evenAdd({ commit, state }) {
        if (state.count % 2 === 0) {
            commit('ADD');
        }
    },
    aynsAdd({ commit, state }) {
        setTimeout(() => {
            commit('ADD');
        }, 1000);
    }
};
const getters = {
    oddEven(state) {
        return state.count % 2 ? "奇数" : "偶数";
    }
};

export default new Vuex.Store({
    state,//状态对象
    mutations,//包含多个更新state函数的对象
    actions,//包含多个对应事件回调函数的对象
    getters,//包含多个getter计算属性函数的对象
});