import Api from "./api.js";

const API = {
  getClients() {
    return Api.get("clients/.json");
  },
  postClient(data) {
    return Api.post("clients/.json", data);
  },
  updateClient(clientId, data) {
    return Api.put(`clients/${clientId}/.json`, {
      ...data,
    });
  },
  deleteClient(clientId) {
    return Api.delete(`clients/${clientId}/.json`);
  },
};

export default API;
