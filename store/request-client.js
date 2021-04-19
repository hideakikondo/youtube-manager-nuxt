export class RequestClient {
    constructor(axios) {
        this.axios = axios
    }

    async get(uri, params = {}) {
        const queryStirng = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        const query = queryStirng.length > 0 ? `${uri}?${queryStirng}` : uri
        return await this.axios.$get(query)
    }
}

export function createRequestClient(axios) {
    return new RequestClient(axios)
}