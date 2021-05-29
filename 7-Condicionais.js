console.log(`Trabalhando com condicionais`)

// const salvador = `Salvador`
// const saoPaulo = ` São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)
const idadeComprador = 15
const estaAcompanhado = true
const temPassagemComprada = true
console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Boa Viagem")
    listaDeDestinos.splice(1, 1);
    
} else {
    console.log("Não é maior de Idade, Não posso vender")
}

console.log("Embarque: \n\n" )

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem")
}else{
    console.log("Você não pode embarcar")
}

// idadeComprador > 18 ? console.log('comprador maior de idade') : console.//log('menor de idade, não posso')
// listaDeDestinos.splice(1,1)


// console.log(salvador)
// console.log(saoPaulo)
// console.log(rioDeJaneiro)
