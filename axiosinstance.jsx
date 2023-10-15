import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "http://localhost:3000/products",
});

// Alter defaults after instance has been created
instance.defaults.headers.common["Authorization"] - "Auth From instance";

export default instance;


