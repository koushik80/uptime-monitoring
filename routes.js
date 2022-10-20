/*
 * Title: Routes
 * Description:  Application Routes
 * Author: Koushik
 * Date: 19.10.2022
 *
 */
// Dependencies

const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,

};

module.exports = routes;