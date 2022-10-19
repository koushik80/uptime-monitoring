/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Koushik
 * Date: 19.10.2022
 *
 */

// module scaffolding

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(404, {
        message: 'Your requested url was not found',
    });
};

module.exports = handler;