'use strict';

const ipfsApi = require('ipfs-api');

class ipfs {

	constructor() {
        this.ipfsApi = ipfsApi('localhost', '5001', {protocol: 'http'});
        //console.log(this.ipfsApi);
    }

    async get(hash) {
        return await this.ipfsApi.files.get(hash);
    }

    add() {

    }
}

module.exports = new ipfs;