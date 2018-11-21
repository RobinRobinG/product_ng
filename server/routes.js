const controller = require('./controllers')
const path = require('path');
module.exports = function(app){
	//GET: Find All
    app.get('/api/products', controller.findAll);
    //GET: Find By ID
    app.get('/api/products/:id', controller.findOne);
	//POST: Add
    app.post('/api/products/new', controller.add);
    //POST: Update by ID
    app.put('/api/products/:id', controller.update);
    //POST: delete by ID
    app.delete('/api/products/:id', controller.delete);


    // //POST: Update by ID - add
    // app.put('/api/products/:id/add', controller.addMember);
    // //POST: Update by ID - add
    // app.delete('/api/products/:id/delete', controller.deleteMember);


    //catch all other URLs
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}