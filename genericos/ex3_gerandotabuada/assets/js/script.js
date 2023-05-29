function gerarTabuada() {
    const valorTabuada = document.getElementById('tabuada');
    const valor = document.getElementById('valor');
    const value = valor.value;
    let tabuada = '';
    for(let contador = 1; contador < 11; contador++){
        tabuada += `${value} * ${contador} = ${value * contador} <br>`;
    }
    valorTabuada.innerHTML = tabuada;
}