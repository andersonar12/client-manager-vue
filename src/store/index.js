import { createStore } from "vuex";
import API from "../api/service.js";

export default createStore({
  state: {
    clients: {},
  },
  mutations: {
    SET_CLIENTS(state, { clients }) {
      state.clients = clients;
    },
  },
  actions: {
    getClients: async () => {
      await API.getClients().then((res) => {
        console.log(res.data);
      });
    },
  },
});
