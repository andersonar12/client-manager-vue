import { createStore } from "vuex";
import API from "../api/service.js";

export default createStore({
  state: {
    clients: {},
    //Para el manejo de errores del formulario en en View->Client (solo fue por motivo de pruebas)
    errors: [],
    users: [],
  },
  mutations: {
    GET_CLIENTS(state, { clients }) {
      state.clients = { ...clients };
    },
    //Para el manejo de errores del formulario
    SET_ERRORS(state, { error }) {
      state.errors.push(error);
    },
    RESET_ERRORS(state) {
      state.errors = [];
    },
    SET_CUSTOM_STATE(state, { attribute, value }) {
      state[attribute] = value;
    },
    DELETE_ATTR_STATE(state, { attribute }) {
      delete state[attribute];
    },
  },
  actions: {
    getClients: async ({ commit }) => {
      await API.getClients().then((res) => {
        console.log(res.data);
        commit("GET_CLIENTS", { clients: res.data });
      });
    },
    addClient: async ({ commit }, data) => {
      await API.postClient(data).then((res) => {
        console.log(res.data);
      });
    },
    updateClient: async ({ commit }, { clientId, data }) => {
      await API.updateClient(clientId, data).then((res) => {
        console.log(res.data);
      });
    },
    deleteClient: async ({ commit }, { clientId }) => {
      await API.deleteClient(clientId).then((res) => {
        console.log(res.data);
      });
    },
  },
});
