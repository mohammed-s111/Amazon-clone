import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-c1a70.cloudfunctions.net/api",
});

// example endpoint
// http://127.0.0.1:5001/clone-c1a70/us-central1/api

// Hosting URL: https://clone-c1a70.web.app

export default instance;
