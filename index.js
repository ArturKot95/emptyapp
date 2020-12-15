const server = require('./src/server')
const db = require('./src/server/db');

db.connect()
  .then(() => {
    server.listen(server.get('port'), () => {
      console.log(`Server listening on localhost:${server.get('port')}`);
    });
  })
  .catch(err => {
    console.error(err);
  });