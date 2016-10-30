'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /pet/{petId}/uploadImage
 */
module.exports = {
    /**
     * summary: uploads an image
     * description: 
     * parameters: petId, additionalMetadata, file
     * produces: application/json
     * responses: 200
     * operationId: uploadFile
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet/{petId}/uploadImage',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
