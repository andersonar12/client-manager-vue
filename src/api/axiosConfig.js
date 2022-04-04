import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://vue-trello-e8e7d-default-rtdb.firebaseio.com/'
})
