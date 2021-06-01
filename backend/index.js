//Importando bibliotecas
const express = require('express'); // Importando o Servidor WEB Express
const config = require('./config');
const cors = require('cors')
//Final do import de bibliotecas

//Rotas
const analyticsRoute = require('./routes/analytics');
const loginRoute = require('./routes/login');
//Final rotas

//Definindo o servidor WEB Express como uma variavel
const app = express()
app.use(express.json());
app.use(cors())
//Final das configurações do servidor WEB


//Carregando as rotas no servidor WEB
app.use('/data', analyticsRoute);
app.use('/login', loginRoute);

//Quando o usuário faz a requisição GET para a URL base retorna o json abaixo
app.get('/', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var datetime = new Date();
    var retorno = JSON.stringify({
        "status": true,
        "mensagem": "Api funcionando",
        "datetime": datetime
    });
    return res.send(retorno);
});

app.listen(config.host.porta, 
    () => console.log(`Servidor iniciado na porta: ${config.host.porta}`))