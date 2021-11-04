import axios from "axios";

const apis = axios.create({
    // baseURL: "https://61822a9b84c2020017d89cce.mockapi.io/api"
    baseURL: "http://localhost:8080"

})

export default apis;