// Switch -> Casp
function pedir() {
    let valor = prompt("Digite um valor de 1 a 4: ")

    switch (Number(valor)) {
        case 1:
            alert("Você escolheu 1 = suco")
            break

        case 2:
            alert("Você escolheu 2 = Água gelada")
            break

        case 3:
            alert("Você escolheu 3 = Sorvete")
            break

        case 4:
            alert("Você chamou o garçom")
            break

        default:
            alert("Escolha uma opção entre 1 a 4")
            break
    }

}

// Condicionais
var numero = 10

numero === 10 ? console.log("Numero é igual a 10") : console.log('Numero não tem o valor 10')