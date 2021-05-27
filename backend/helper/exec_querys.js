exports.exec_query = function(body){
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