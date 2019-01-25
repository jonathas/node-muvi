const request = require('request-promise');

class Muvi {

    constructor(apiBase, apiToken) {
        this.apiBase = apiBase;
        this.apiToken = apiToken;
    }

    _executeRequest(endpoint, queryString, httpMethod = 'GET') {
        let uri = `${this.apiBase}/${endpoint}?authToken=${this.apiToken}&`;
        uri += queryString;

        const options = {
            method: httpMethod,
            uri: uri,
            rejectUnauthorized: false,
            json: true,
            timeout: 30000 // miliseconds. 30 seconds = 30000
        };

        return request(options);
    }

    async login(email, password) {
        const queryString = `email=${email}&password=${password}`;
        const res = await this._executeRequest('login', queryString, 'POST');
        return res;
    }

    registerUser(name, email, password) {
        const queryString = `name=${name}&email=${email}&password=${password}`;
        return this._executeRequest('registerUser', queryString, 'POST');
    }

    async getCategoryList(langCode = 'en') {
        const queryString = `lang_code=${langCode}`;
        const res = await this._executeRequest('getCategoryList', queryString);
        return res;
    }

    async getCategoryContentList(categoryPermalink, genre = '', limit = null, offset = null, country = '') {

        let queryString = `permalink=${categoryPermalink}`;

        if (genre) {
            queryString += `&genre=${genre}`;
        }
        if (limit) {
            queryString += `&limit=${limit}`;
        }
        if (offset) {
            queryString += `&offset=${offset}`;
        }
        if (country) {
            queryString += `&country=${country}`;
        }

        const res = await this._executeRequest('getContentList', queryString);
        return res;
    }

    async getCategoryContentDetails(contentPermalink, country) {
        const queryString = `permalink=${contentPermalink}&country=${country}`;
        const res = await this._executeRequest('getContentDetails', queryString);
        return res;
    }

    async getGenreList() {
        const res = await this._executeRequest('getGenreList', '');
        return res;
    }

    async getVideoDetails(contentUniqueId, streamUniqueId) {
        const queryString = `content_uniq_id=${contentUniqueId}&stream_uniq_id=${streamUniqueId}`;
        const res = await this._executeRequest('getVideoDetails', queryString);
        return res;
    }

    async search(query, limit = null, offset = null, country = '') {
        let queryString = `q=${query}`;

        if (limit) {
            queryString += `&limit=${limit}`;
        }
        if (offset) {
            queryString += `&offset=${offset}`;
        }
        if (country) {
            queryString += `&country=${country}`;
        }

        const res = await this._executeRequest('searchData', queryString);
        return res;
    }
}

exports.default = Muvi;
