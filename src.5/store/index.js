import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const getters = {
    remaining(state) {
        return state.lists.filter(list => !list.isOver).length;
    },
    showList(state) {
        let type = state.showType;
        return state.lists.filter(list => (type === 0) ? true : (type === 1) ? !list.isOver : list.isOver);
    }
};

const mutations = {
    ADD(state, content) {

        state.lists.unshift({
            key: Math.random() * 10000000000 | 0,
            content
        });
    },
    REMOVE(state, key) {
        let i = state.lists.findIndex(obj => obj.key === key);
        console.log(i);
        if (i != -1) {

            state.lists.splice(i, 1);
        }
    },
    OVER(state, key) {
        let i = state.lists.findIndex(obj => obj.key === key);

        state.lists.splice(i, 1, {
            ...state.lists[i],
            isOver: !state.lists[i].isOver
        });
    },
    TYPE(state, n) {
        state.showType = n;
    }
};
const actions = {
    add({ commit }, content) {
        commit("ADD", content);
    },
    remove({ commit }, key) {
        commit("REMOVE", key);
    },
    removeOver({ commit, state }) {

        state.lists.filter(t => true).forEach((list) => {
            if (list.isOver) {
                commit("REMOVE", list.key);
            }
        });
    },
    over({ commit }, key) {
        commit("OVER", key);
    },
    all({ commit }) {
        commit("TYPE", 0);
    },
    remainder({ commit }) {
        commit("TYPE", 1);
    },
    over({ commit }) {
        commit("TYPE", 2);
    }
};
const state = {
    lists: [],
    showType: 0,
};

export default new Vuex.Store({

    getters,
    mutations,
    actions,
    state
});
