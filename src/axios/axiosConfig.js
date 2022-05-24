import axios from 'axios'

const http = axios.create({
  baseURL: 'https://vue-trello-e8e7d-default-rtdb.firebaseio.com/'
})

/* Configuracion Interceptors en el request Axios - se puede usar para agregar el Bearer token*/
http.interceptors.request.use(request => {
  const auth_token = localStorage.getItem('auth_token')
  if (auth_token) {
    request.headers.Authorization = `Bearer ${auth_token}`
  }
  return request
})

/* Configuracion Interceptors en el response Axios */
http.interceptors.response.use(
  response => {
    console.log('por el response Axios Interceptor')
    return response
  },
  err => {
    console.log('por el error Axios Interceptor')
    return Promise.reject(err)
  }
)

export { http }

