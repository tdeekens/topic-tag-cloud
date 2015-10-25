'use strict';

// Intialize server and fixtures
let
  fs = require('fs'),
  Hapi = require('hapi'),
  server = new Hapi.Server(),
  fixtures = {
    topics: JSON.parse(
      fs.readFileSync(`${__dirname}/fixtures/topics.json`)
    ).topics
  };

server.connection({
  routes: {
    cors: true
  },
  port: 3000
});

// Route for all topics
server.route({
  method: 'GET',
  path: '/topics',
  handler: function(request, reply) {
    reply(fixtures.topics);
  }
});

// Route for one topic - returns 404 if topic with
// id does not exist
server.route({
  method: 'GET',
  path: '/topic/{id}',
  handler: function(request, reply) {
    let
      id = request.params.id,
      topic = fixtures.find(topic => topic.id === id);

    if (topic) { reply(topic); }
    else { reply(`Requested topic by id = ${id} does not exist.`).code(404) }
  }
});

module.exports = server;
