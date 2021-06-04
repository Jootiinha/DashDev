const express = require('express');
const db = require('../services/db');


router = express.Router();

router.post('/cadastro_hotel', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    console.log("O frontend chamou essa função do backend")
    var datetime = new Date();
    
    var query = "INSERT INTO dados_hotel(nome_hotel, cep, cidade, estado, pais, endereco_completo) VALUES ('" + req.body.nome_hotel + "', '" + req.body.cep + "', '" + req.body.cidade + "', '" + req.body.estado + "', '" + req.body.pais + "', '" + req.body.endereco_completo + "');";
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