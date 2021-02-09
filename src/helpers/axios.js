import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-e-clone-eb1d1.cloudfunctions.net/api",
  // "http://localhost:5001/e-clone-eb1d1/us-central1/api"
});

export default instance;
