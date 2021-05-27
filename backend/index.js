//Importando bibliotecas
const express = require('express'); // Importando o Servidor WEB Express
//Final do import de bibliotecas


//Definindo o servidor WEB Express como uma variavel
const app = express()
app.use(express.json());



//Variaveis globais global
var datetime = new Date();


function exec_query(body){

    var retorno = '';

    if(body.requisicao.grupo == 'data'){        

        retorno = JSON.stringify({
            "status": true,
            "mensagem": "Consulta realizada com sucesso.",
            "data": [
                {
                    "localizador": "aaa",
                    "total_vendas": 123.65,
                    "total_frigobar": 852.66
                },
                {
                    "localizador": "bbb",
                    "total_vendas": 987.65,
                    "total_frigobar": 96878.66
                }
            ]
        })
    }
    
    return retorno;
}


//Quando o usuário faz a requisição GET para a URL base retorna o json abaixo
app.get('/', function(req, res){
   
    res.setHeader('Content-Type', 'application/json');

    var retorno = JSON.stringify({
        "status": true,
        "mensagem": "Api funcionando",
        "datetime": datetime
    });
    return res.send(retorno);
});


app.post('/data/analytics', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    console.log("Chamou a função");
    return res.send(exec_query(req.body)); 
})


//Quando o usuário faz a requisição POST para a URL base retorna o json abaixo
app.post('/usuario/buscartodos', function(req, res){
    res.setHeader('Content-Type', 'application/json');

    console.log("Executando função");

    var retorno = JSON.stringify({
        "status": true,
        "mensagem": "Api funcionando",
        "datetime": datetime,
        "nome_usuario": req.body.nome_usuario,
        "idade": req.body.idade
    });
    return res.send(retorno);
});

app.post('/usuario/cadastrar', function(req, res){

    res.setHeader('Content-Type', 'application/json');
    var retorno = JSON.stringify

    console.log("Executando função");


    if (req.body.idade >=18){
            retorno = JSON.stringify({
            "status": true,
            "mensagem": "Dado inserido com sucesso",
            "datetime": datetime,
            "nome_usuario": req.body.nome_usuario,
            "idade": req.body.idade
        });
    }

    else {
            retorno = JSON.stringify({
            "status": true,
            "mensagem": "Erro ao cadastrar usuário",
            "datetime": datetime,
            "nome_usuario": req.body.nome_usuario,
            "idade": req.body.idade
        });
    }

    return res.send(retorno);

});

/*
Modelo retorno insert SUCESSO
{
    "status": true,
    "mensagem": "Dado inserido com sucesso",
    "datetime": datetime,
    "codigo_usuario": <codigo gerado>,
}
-- "Colocar IF"
if req.body.idade < 18
Modelo retorno insert INSUCESSO
{
    "status": false,
    "mensagem": "Erro ao cadastrar usuário",
    "datetime": datetime,
    "codigo_usuario": <codigo gerado>,
}
*/

app.listen(process.env.PORT || 8080)