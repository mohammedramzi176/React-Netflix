import { baseUrl } from "./Constants/Constants";
import axios from "axios"

const instance = axios.create({
    baseURL:baseUrl
  });

  export default instance