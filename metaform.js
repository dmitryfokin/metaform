'use strict';

const FormManagerServer = require('./lib/server/formManagerServer.js');
const FormManagerWebClient = require('./lib/webclient/formManagerWebClient.js');

module.exports = {
  ...FormManagerServer,
  ...FormManagerWebClient, 
}
