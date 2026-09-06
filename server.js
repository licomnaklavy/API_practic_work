const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mc-database.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Items: https://apipracticwork-production-1ab5.up.railway.app/items`);
  console.log(`Mobs: https://apipracticwork-production-1ab5.up.railway.app/mobs`);
  console.log(`Blocks: https://apipracticwork-production-1ab5.up.railway.app/blocks`);
});