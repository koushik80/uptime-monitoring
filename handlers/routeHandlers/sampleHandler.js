/*
 * Title: Sample Handler
 * Description:  Sample Handler
 * Author: Koushik
 * Date: 19.10.2022
 *
 */

// module scaffolding

const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;