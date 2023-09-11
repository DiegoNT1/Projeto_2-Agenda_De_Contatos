const form = document.getElementById('form-agenda');
const imgContato = '<img src="./images/contato.png" alt="Img contato" />';
const contatos = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTel = document.getElementById('num-tel');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} ja foi adiconado`);
    } else{
        contatos.push(inputNomeContato.value);
        telefone.push(parseFloat(inputNumeroTel.value));

    let linha = '<tr>';
    linha += `<td>${imgContato}</td>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTel.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroTel.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}