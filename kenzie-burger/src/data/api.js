import axios from "axios"

const instance = axios.create({

    baseURL: 'https://hamburgueria-kenzie-json-serve.herokuapp.com/products',
    timeout: 3000

})

export default instance