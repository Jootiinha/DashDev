const express = require('express');
const db = require('../services/db');
const exec_query = require('../helper/exec_querys.js');

router = express.Router();

router.post('/totais', function(req, res){
    res.setHeader('Content-Type', 'application/json');


    console.log("O frontend chamou essa função do backend")
    console.log(req.body.datetime);
    
    var query = 'SELECT * FROM teste limit 20;';
    var retorno = '';

    db.query(query, function(err, data, fields){
        if(err){
            retorno = {
                "status": false,
                "data": [],
                "mensagem": "Erro ao realizar consulta." + err
            }
            res.send(retorno);
        }
        else{    
            retorno = {
                "status": true,
                "data": data,
                "mensagem": "Consulta realizada com sucesso."
            }
            res.send(retorno);
        }
    });
});
module.exports = router;