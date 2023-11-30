function insert(num) { // criei um evento click, guardando quando eu clicar dentro do parâmetro (num)
    var numero = document.getElementById('resultado') // conectei onde vai aparecer as coisas...
    numero.innerHTML += num // mandando escrever na tela...
}
function clean() { // criei outro evento click...
   var numero = document.getElementById('resultado') // quando clicar aparecer...
   numero.innerHTML = '' // o resultado sumir ( apagar né...)
}


function calcular() { // criei outro evento click...
    let resultado = document.getElementById('resultado').innerHTML // conectei o resultado, obtendo conteudo HTML no ID (resultado)
    
    if(resultado) { // to verificando se tem algo escrito no (resultado)...
      document.getElementById('resultado').innerHTML = eval(resultado) // se tiver algo, vai fazer as contas...
    }
    else { // se não tiver nada escrito no (resultado), retornar isso
        document.getElementById('resultado').innerHTML = "Sem nada..." 
    }
}




