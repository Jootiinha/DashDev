const express = require('express');
const db = require('../services/db');

router = express.Router();

router.post('/login', function(req, res){
    res.setHeader('Content-Type', 'application/json');


    console.log("O frontend chamou essa função do backend")
    console.log(req.body.datetime);
    
    var query = 'SELECT usuario, senha, email FROM login WHERE usuario = "' + req.body.usuario + '" AND  senha = "' + req.body.senha + '" and email = "' + req.body.email + '";';
    var retorno = '';

    db.query(query, function(err, data, fields){
        if(err){
            retorno = {
                "status": false,
                "data": [],
                "mensagem": "Erro ao fazer login." + err
            }
            res.send(retorno);
        }
        else{    
            retorno = {
                "mensagem": "Login realizado com sucesso!.",
                "Nome do usuário:": req.body.usuario,
                "E-mail": req.body.email,
                
            }
            res.send(retorno);
        }
    });
});
module.exports = router;