import axios from "axios";

axios.defaults.headers.common["accept-language"] = "ru";

const baseURL = "https://host1.medsafe.tech:40443/api";

const API = axios.create({
  baseURL: baseURL,
});

export default API;
