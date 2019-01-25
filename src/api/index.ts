import axios from "axios";
const base = "https://api.github.com";

const client = axios.create({
    baseURL: base,
    timeout: 10000
});

const search = "/search/repositories";

export async function searchRepositories(repo: string, page: number = 1): Promise<ResponseData> {
    return client.get(search + `?page=${page}&sort=stars&q=${repo}&order=desc`).then((data) => data.data);
}

export function popularJSFrameWorks(): Promise<ResponseData> {
    return searchRepositories("language:javascript");
}

export async function getMyRepos(username: string): Promise<RepositoryItem[]> {
    return client.get(`/users/${username}/repos`).then((data) => data.data);
}
