import axios from 'axios';

let baseService = class BaseService {
    baseURL = ''
    headers
    $http

    constructor() {
        console.log(process.env.VUE_APP_API_URL)
        this.baseURL = process.env.VUE_APP_API_URL

        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }

        this.$http = axios.create({
            timeout: 1600000
        });

        this.$http.interceptors.request.use(config => {
            return config
        })

        this.$http.interceptors.response.use(response => {
            return response
        })
    }

    getJson(uri = '', data = {}) {
        if (Object.keys(data).length > 0) {
            uri = `${uri}?${this.getQueryString(data)}`
        }

        return this.$http.get(uri)
    }

    getHeaders(additionalHeaders = {}) {
        return {            
            ...this.headers,
            ...additionalHeaders,
        };
    }

    prepareUrl(url, params) {
        for (let index in params) {
            let identifier = ':' + index;
            url = url.replace(identifier, params[index]);
        }
        return url;
    }

    getQueryString(params) {
        return (
            Object
                .keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&')
        )
    }

    post(uri = '', data= {}, additionalHeaders = {}) {
        return this.$http.post(uri, data, {
            headers: this.getHeaders(additionalHeaders),
        })
    }

    put(uri = '', data, additionalHeaders = {}) {
        return this.$http.put(uri, data, {
            headers: this.getHeaders(additionalHeaders),
        })
    }

    patch(uri = '', data, additionalHeaders = {}) {
        return this.$http.patch(uri, data, {
            headers: this.getHeaders(additionalHeaders),
        })
    }

    remove(uri = '', data = {}, additionalHeaders = {}) {
        return this.$http(uri, {
            method: 'DELETE',
            headers: this.getHeaders(additionalHeaders),
            data: data
        })
    }

    get(uri = '', data = {}, additionalHeaders = {}) {
        if (Object.keys(data).length > 0) {
            uri = `${uri}?${this.getQueryString(data)}`
        }

        return this.$http.get(uri, {
            headers: this.getHeaders(additionalHeaders),
        })
    }
};

export default baseService
