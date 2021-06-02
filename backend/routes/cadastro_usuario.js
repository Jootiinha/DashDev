const express = require('express');
const db = require('../services/db');


router = express.Router();

router.post('/cadastro_usuario', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    console.log("O frontend chamou essa função do backend")
    var datetime = new Date();
    
    var query = "INSERT INTO perfil_usuario(usuario, senha, email) VALUES ('" + req.body.usuario + "', '" + req.body.senha + "', '" + req.body.email + "');";
    var retorno = '';

    db.query(query, function(err, data, fields){
        if(err){
            retorno = {
                "status": false,
                "data": [],
                "mensagem": "Dados inseridos incorretamente, favor preencher os campos de acordo com as informações solicitadas." + err,
                "datetime": datetime
            }
        }
        else{
            if(data.length == 0){
                retorno = {
                    "status": false,
                    "data": [],
                    "mensagem": "Erro ao realizar cadastro, por favor tente novamente." + err,
                    "datetime": datetime
                }
            }
            else{
                retorno = {
                    "status": true,
                    "mensagem": "Cadastro realizado com sucesso! Se direcione para a página de login.",
                    "datetime": datetime                
                }
            }
        }

        res.send(retorno);
    });
});
module.exports = router;