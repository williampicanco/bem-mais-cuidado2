//** serviços de requisições com os verbos HTTP da Web API - (bem-mais-cuidado.API) */
import axios from 'axios'

export default axios.create({
  //baseURL:'https://localhost:7003/api/',
  baseURL:'https://localhost:7003/api/'
})