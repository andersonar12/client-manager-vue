export const mutations = {
  SET_MODAL_OPEN(state, payload) {
    state.modalOpen = payload
  },
  GET_CLIENTS(state, { clients }) {
    state.clients = { ...clients }
  },
  //Manejo del token desde el state en la aplicacion
  SET_TOKEN(state, { token }) {
    localStorage.setItem('token', token)
    state.token = token
  },
  DEL_TOKEN(state) {
    localStorage.removeItem('token')
    state.token = null
  },
  //Para el manejo de errores del formulario en en View->Client (solo fue por motivo de pruebas)
  SET_ERRORS(state, { error }) {
    state.errors.push(error)
  },
  RESET_ERRORS(state) {
    state.errors = []
  },
  //Se pueden añadir o eliminar nuevas propiedades al state mediante un "mutation" como de este tipo
  SET_CUSTOM_STATE(state, { attribute, value }) {
    state[attribute] = value
  },
  DELETE_ATTR_STATE(state, { attribute }) {
    delete state[attribute]
  }
}
