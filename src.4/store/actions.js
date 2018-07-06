
export default {
    addList({ commit, state }, list) {
        commit('ADD_LIST', list)
    },
    init({ commit }) {

        commit('INIT');
    }
};