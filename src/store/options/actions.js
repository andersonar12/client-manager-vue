import { http } from '../../axios/axiosConfig.js'

/* const API = {
  getClients() {
    return http.get('clients/.json')
  },
  postClient(data) {
    return http.post('clients/.json', data)
  },
  updateClient(clientId, data) {
    return http.put(`clients/${clientId}/.json`, {
      ...data
    })
  },
  deleteClient(clientId) {
    return http.delete(`clients/${clientId}/.json`)
  }
} */

export const actions = {
  getClients: async ({ commit }) => {
    //Una forma de generar un peticion con Axios
    try {
      const { data } = await http.get('clients/.json')
      console.log(data)
      commit('GET_CLIENTS', { clients: data })
    } catch (error) {
      console.log(error)
    }
  },
  addClient: async ({ commit }, data) => {
    await http.post('clients/.json', data).then(res => {
      console.log(res.data)
    })
  },
  updateClient: async ({ commit }, { clientId, data }) => {
    await http
      .put(`clients/${clientId}/.json`, {
        ...data
      })
      .then(res => {
        console.log(res.data)
      })
  },
  deleteClient: async ({ commit }, { clientId }) => {
    await http.delete(`clients/${clientId}/.json`).then(res => {
      console.log(res.data)
    })
  }
}

