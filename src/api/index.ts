import axios from "axios";
const base = "https://api.github.com";

const client = axios.create({
    baseURL: base,
    timeout: 1000
});

const search = "/search/repositories";