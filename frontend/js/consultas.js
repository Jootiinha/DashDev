
var urlBase = 'http://localhost:8080';
var datetime = new Date();

// Consultando dados do backend no click do botão btnConsultaDados
document.getElementById('btnConsutlaDados').addEventListener('click', function(){
    var urlReq = urlBase + '/data/totais';
    var tabelaResultado = document.getElementById('tabelaResultado').getElementsByTagName('tbody')[0];
    while (tabelaResultado.rows.length > 0){
        tabelaResultado.deleteRow(0);
    }


    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', urlReq, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    

    xhr.send(JSON.stringify({
        "nome_usuario": "João Carlos Romero Monteiro",
        "idade": 25,
        "funcao": "adm",
        "datetime": datetime
    }));


    xhr.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE){
            if(this.status == 200){

                var dadosResposta = this.response.data;

                var contador = 1

               
                // Insert a row at the end of table

                dadosResposta.forEach(element => {
                    console.log(element);

                    var elementosTabela = "\
                    <tr>\
                        <th scope='row'>" + contador.toString() + "</th>\
                        <td>" + element.localizador +"</td>\
                        <td>" + element.tt_rsv +"</td>\
                        <td>" + element.tt_frb +"</td>\
                      </tr>\
                    ";

                    var newRow = tabelaResultado.insertRow(tabelaResultado.rows.length);
                    newRow.innerHTML = elementosTabela;
                    contador = contador + 1
                });
            }
        }        
    }
});