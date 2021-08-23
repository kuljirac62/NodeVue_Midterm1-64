const UserController = require('./controllers/UserController.js');
const UserAuthenController =  require('./controllers/UserAuthenController');


module.exports = (app) => {
    app.post('/TaxiDriver',UserController.create)
    app.put('/TaxiDriver/:userId',UserController.put)
    app.delete('/TaxiDriver/:userId',UserController.remove)
    app.get('/TaxiDriver/:userId',UserController.show)
    app.get('/TaxiDriver',UserController.index)
    app.post('/login',UserAuthenController.login)
}