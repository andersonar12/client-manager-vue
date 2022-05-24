export const getUsers = () => fetch('https://reqres.in/api/users/').then(response => response.json())
export const getUsersJSON = () => fetch('https://jsonplaceholder.typicode.com/users/').then(response => response.json())
//Como configurar un Interceptor con Fecth API
const { fetch: originalFetch } = window
window.fetch = async (...args) => {
  let [resource, config] = args
  let response = await originalFetch(resource, config)

  if (!response.ok && response.status === 404) {
    // 404 error handling
    return Promise.reject(response)
  }
  return response
}
//Como configurar un Interceptor con Fecth API

