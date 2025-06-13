// setInterval -> Basicamente executa de tempos em tempos, infinitamente. A cada 1000, é equivalente a 1 segundo.
// Para pará-lo, basta atribuir a uma variável e atribuir ao comando clearInterval(nomeDaVariável).

function acao() {
    document.writeln('Executando... <br />');
}
// var timer = setInterval(() => {
//     document.writeln('Executando!!! <br />');
// }, 1000);


// setTimeOut -> Executa apenas uma vez, aquilo que for passado.

setTimeout(acao, 3000);