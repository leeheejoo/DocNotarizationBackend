'use strict';

class returnCode {

    getSuccess() {
        return {
            code : 0,
            msg : `success`
        }
    }
    
    getFail() {
        return {
            code : 1,
            msg : `fail`
        }
    }
}

module.exports = new returnCode; 