console.log(`Trabalhando com condicionais`)

// const salvador = `Salvador`
// const saoPaulo = ` São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)
const idadeComprador = 15
const estaAcompanhado = true
let  temPassagemComprada = false
const destino = "Curitiba"

console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

const podeComprar =  (idadeComprador >= 18 || estaAcompanhado == true) ; 


let contador = 0 
let destinoExiste = false; 
while(contador < 3){
   
    if (listaDeDestinos[contador] == destino){
        console.log('Destino Existe')
        destinoExiste = true; 
        break; 
    }
    contador += 1
} 
console.log("Destino existe: " , destinoExiste)

if(podeComprar && destinoExiste){
    console.log("Boa Viagem")
}else{
    console.log("Desculpe, tivemos um erro.. ")
}

for(let cont = 0; cont < 3; cont++){
    if(listaDeDestinos[cont] == destino){
        destinoExiste = true 
    }
}
// idadeComprador > 18 ? console.log('comprador maior de idade') : console.//log('menor de idade, não posso')
// listaDeDestinos.splice(1,1)


// console.log(salvador)
// console.log(saoPaulo)
// console.log(rioDeJaneiro)
