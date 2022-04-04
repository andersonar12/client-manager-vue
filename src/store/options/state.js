export const state = {
  token: localStorage.getItem('token') || null,
  clients: {},
  users: [],
  //Para el manejo de errores del formulario en en View->Client (solo fue por motivo de pruebas)
  errors: [],
  modalOpen: false
}
