const express = require('express');
const app = express();

//route
const mainroute = require('./routes/main.route.js');
app.use("/",mainroute);

//configurações
app.set('port', process.env.port || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado na porta: ' + app.get('port'));
});
app.use(function(req, res, next){
    console.log('URL:',req.originalUrl);
    console.log('Data e Hora ' + new Date());
    next();
});