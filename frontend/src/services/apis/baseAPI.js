import axios from 'axios';
const authorizationHeader = {
  'Authorization': 'teste'
}
const baseAPI = axios.create({
  baseURL: 'http://localhost:3001',
  headers: authorizationHeader
})

export default baseAPI