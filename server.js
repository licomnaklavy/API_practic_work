const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Добавляем кастомный роутинг
server.use(middlewares);

// Явно указываем маршруты для ресурсов
server.get('/items', (req, res) => {
  const db = router.db.get('items').value();
  res.json(db);
});

server.get('/mobs', (req, res) => {
  const db = router.db.get('mobs').value();
  res.json(db);
});

server.get('/blocks', (req, res) => {
  const db = router.db.get('blocks').value();
  res.json(db);
});

server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Items: https://apipracticwork-production-1ab5.up.railway.app/items`);
  console.log(`Mobs: https://apipracticwork-production-1ab5.up.railway.app/mobs`);
  console.log(`Blocks: https://apipracticwork-production-1ab5.up.railway.app/blocks`);
});