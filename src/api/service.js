import axios from "axios";
import endpoints from "./endpoints.js";

const url = endpoints["urlFirebase"];

const API = {
  getClients() {
    return axios.get(url + "clients/.json");
  },
  postClient(data) {
    return axios.post(url + "clients/.json", data);
  },
  updateClient(clientId, data) {
    return axios.put(url + `clients/${clientId}/.json`, {
      ...data,
    });
  },
  deleteClient(clientId) {
    return axios.delete(url + `clients/${clientId}/.json`);
  },
};

export default API;
