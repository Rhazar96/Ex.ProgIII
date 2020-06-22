const express = require('express');
const router = express.Router();

router.get('/info', function(req, res){
    res.send("Rota info executada com sucesso…");
    console.log("Início da execução da rota info…");
});

router.get('/bemvindo', function(req, res){
    var valor = req.param("nome");
    res.send("Bem vindo, " + valor +"!");
});

router.post('/soma', function(req, res){
    let v1 = parseInt(req.body.valor1);
    let v2 = parseInt(req.body.valor2);

    let resultado = v1 + v2;

    var soma = {'valor1': v1,
    'valor2' : v2,
    'resultado' : resultado}

    res.send(soma);

});

module.exports = router;