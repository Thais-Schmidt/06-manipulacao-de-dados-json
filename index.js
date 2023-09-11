var table;

function criaTable(){
    table = `<tr>
                <td>Nome:</td>
                <td>Sobrenome:</td>
                <td>Idade:</td>
                <td>Sexo:</td>
                <td>Cidade:</td>
                <td>Estado</td> 
            </tr>`;
}

let url = "dados/alunos.json";

function dadosJson() {
    $.getJSON(url)
        .done(function (data) {
            document.getElementById('titulo').innerHTML = 'Retornando dados com JQUERY/JSON';
            document.getElementById('desc-tabela1').innerText = `${data['nomeEscola']} ${data['cidade']}`;
            alu = data.alunos;
            criaTable();
            $.each(alu, function(){
                table += `<tr>
                <td> ${this['nome']} </td>    
                <td> ${this['sobrenome']} </td>
                <td> ${this['idade']} </td>
                <td> ${this['sexo']} </td>
                <td> ${this['cidade']} </td>
                <td> ${this['estado']} </td>        
                </tr>`;
            })
            document.getElementById('tbl-alunos').innerHTML = table;
        })
        .fail(function () {
            alert("Ocorreu um erro na leitura do arquivo JQUERY.<br>")
        })

}

dadosJson();