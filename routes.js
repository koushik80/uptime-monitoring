/*
 * Title: Routes
 * Description:  Application Routes
 * Author: Koushik
 * Date: 19.10.2022
 *
 */
// Dependencies

const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    'sample': sampleHandler,
};

module.exports = routes;