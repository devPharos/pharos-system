import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL
      :
      "http://198.50.224.191:8099/rest"
});

export default api;
