import axios from 'axios'
const productsApi = axios.create({
    baseURL:'https://61c35faa9cfb8f0017a3eb2e.mockapi.io/api/v1'
})

export default productsApi