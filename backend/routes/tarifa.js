const express = require('express');
const db = require('../services/db');
const exec_query = require('../helper/exec_querys.js');

router = express.Router();

router.post('/historico/tarifa', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    console.log("HSUAHSU")
    var query = "SELECT \
            SUBSTRING(`DATA`, 4, 2) AS `data`,\
            sum(diaria) AS diaria\
        FROM hotel_diaria_ocupacao\
        GROUP BY SUBSTRING(`DATA`, 4, 2);";


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