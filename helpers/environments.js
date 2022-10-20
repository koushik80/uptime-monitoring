/*
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Koushik
 * Date: 19.10.2022
 *
 */

// Dependencies
const dotenv = require("dotenv");

dotenv.config();

// module scaffolding

const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'hsjdhsdhsjdhjshdjshd',
    maxChecks: 5,
    twilio: {
        fromPhone: '+18589144104',
        accountSid: process.env.Account_SID,
        authToken: process.env.Auth_Token,
    },
};

environments.production = {
    port: 4000,
    envName: 'production',
    secretKey: 'djkdjskdjksdjksjdskjd',
    maxChecks: 5,
    twilio: {
        fromPhone: '+18589144104',
        accountSid: process.env.Account_SID,
        authToken: process.env.Auth_Token,
    },
};

// determine which environment was passed

const currentEnvironment =
    typeof (process.env.NODE_ENV) === 'string'
    ? process.env.NODE_ENV
    : 'staging';

// export corresponding environment object

const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

    // export module
module.exports = environmentToExport;