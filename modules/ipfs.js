'use strict';

const ipfsApi = require('ipfs-api');
const config = require('../config/config');

class ipfs {

	constructor() {
        this.ipfsApi = ipfsApi(config.ipfsServerIp, config.ipfsServerPort, {protocol: 'http'});
        //console.log(this.ipfsApi);
    }

    async get(hash) {
        return await this.ipfsApi.files.get(hash);
    }

    async add(fileName, data) {
        return await this.ipfsApi.files.add({
            path:fileName,
            content:data
        });
    }
}

module.exports = new ipfs;