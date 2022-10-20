/*
 * Title:  Project Initial file
 * Description: Initial file to start the node server and workers
 * Author: Koushik
 * Date: 19.10.2022 updated on 20.10.2022
 *
 */

// dependencies

const server = require('./lib/server');
const workers = require('./lib/worker');

// app object - module scaffolding
const app = {};

app.init = () => {
    // start the server
    server.init();
    // start the workers
    workers.init();
};

app.init();

// export the app
module.exports = app;
