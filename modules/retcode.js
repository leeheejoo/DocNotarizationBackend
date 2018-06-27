'use strict';

class returnCode {

    getSuccess() {
        return {
            code : 0,
            msg : `success`
        }
    }
    
}

module.exports = new returnCode; 