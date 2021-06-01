const express = require('express');
const db = require('../services/db');


router = express.Router();

router.post('/login', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    console.log("O frontend chamou essa função do backend")
    var datetime = new Date();
    
    var query = "SELECT login, senha, email FROM usuario WHERE login = '" + req.body.login + "' and senha = '" + req.body.senha + "';";
    var retorno = '';

    db.query(query, function(err, data, fields){
        if(err){
            retorno = {
                "status": false,
                "data": [],
                "mensagem": "Erro ao fazer login." + err,
                "datetime": datetime
            }
        }
        else{
            if(data.length == 0){
                retorno = {
                    "status": false,
                    "data": [],
                    "mensagem": "Erro ao fazer login. Usuário e senha não conferem: " + err,
                    "datetime": datetime
                }
            }
            else{
                retorno = {
                    "status": true,
                    "mensagem": "Login realizado com sucesso!.",
                    "nome_de_usuario:": req.body.usuario,
                    "email": req.body.email,
                    "datetime": datetime                
                }
            }
        }

        res.send(retorno);
    });
});
module.exports = router;