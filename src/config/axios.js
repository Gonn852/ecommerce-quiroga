import axios from "axios";

const instance = axios.create({
    baseURL:"https://jsonfy.com/"
});

export default instance;