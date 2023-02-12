import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-c1a70.cloudfunctions.net/api",
});



export default instance;
