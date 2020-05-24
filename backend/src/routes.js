const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')


const routes = Router();

// Métodos HTTP: GET (Buscar), POST (Criar), PUT (Editar), DELETE (Deletar)

// Tipos de Parâmetros
// Query: req.query (Filtros, ordenação, paginação, ...)
// Route: req.params (Identificar um recurso na alteração ou remoção)
// Body:  req.body (Dados para criação ou alteração de um registro)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;