import axios from "axios";
export default {
    ADD_LIST(state, list) {
        state.lists.unshift(list);
    },
    INIT(state) {
        setTimeout(() => {
            state.lists = JSON.parse(
                window.localStorage.getItem("list_key") || "[]"
            );
            axios.get("http://localhost/data.json").then(
                data => {
                    console.log(data, state);
                    window.a = state;
                    state.lists = data.data;
                },
                () => {
                    console.log("失败");
                }
            );
        }, 1000)
    }
};