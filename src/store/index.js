import { createStore } from "vuex";
import API from "../api/service.js";

export default createStore({
  state: {
    token: localStorage.getItem("token") || null,
    clients: {},
    users: [],
    //Para el manejo de errores del formulario en en View->Client (solo fue por motivo de pruebas)
    errors: [],
  },
  mutations: {
    GET_CLIENTS(state, { clients }) {
      state.clients = { ...clients };
    },
    //Manejo del token desde el state en la aplicacion
    SET_TOKEN(state, { token }) {
      localStorage.setItem("token", token);
      state.token = token;
    },
    DEL_TOKEN(state) {
      localStorage.removeItem("token");
      state.token = null;
    },
    //Para el manejo de errores del formulario en en View->Client (solo fue por motivo de pruebas)
    SET_ERRORS(state, { error }) {
      state.errors.push(error);
    },
    RESET_ERRORS(state) {
      state.errors = [];
    },
    //Se pueden añadir o eliminar nuevas propiedades al state mediante un "mutation" como de este tipo
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
