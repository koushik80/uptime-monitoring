/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Koushik
 * Date: 19.10.2022
 *
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
//const environments = require('./helpers/environments');
//const data = require('./lib/data');

// app object - module scaffolding
const app = {};


// configuration
app.config = {
    port: 3000,
};


// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// handle request & response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
