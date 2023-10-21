import axios from 'axios'

const client = axios.create({
  baseURL: 'https://pever.azurewebsites.net/',
  withCredentials: true
})

client.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/json'
  config.headers.Authorization = localStorage.getItem('loginErpSportAppToken') || undefined

  return config
})
  
export default client
