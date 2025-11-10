const routes = require('./routes');
const SongSHandler = require('./handler');

module.exports = {
  name: 'songs',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const songsHandler = new SongSHandler(service, validator);
    server.route(routes(songsHandler))
  },
};
