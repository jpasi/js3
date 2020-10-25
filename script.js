let nome = prompt("Nome")
let sobre = prompt("Sobrenome")
let idade = prompt("Idade")
let es = prompt("Estado Civil")
let cor = prompt("Cor Favorita")
let pet = prompt("Tem pet?")

let nome2 
let sobre2 
let idade2 
let es2 
let cor2 
let pet2 

if(confirm('Tem segunda pessoa?')){
        nome2 = prompt("Nome da segunda pessoa")
        sobre2 = prompt("Sobrenome da segunda pessoa")
        idade2 = prompt("Idade da segunda pessoa")
        es2 = prompt("Estado Civil da segunda pessoa")
        cor2 = prompt("Cor Favorita da segunda pessoa")
        pet2 = prompt("Tem pet? da segunda pessoa")

    } 

    if('Idade2 > idade'){
        console.log(`${nome2} é maior que ${nome}`)
    } else {
        console.log(`${nome} é maior que ${nome2}`)
    }

    
let DadosP = new Object()
    DadosP.Nome = nome
    DadosP.Sobrenome = sobre
    DadosP.Idade = idade
    DadosP.Estado_Civil = es
    DadosP.Cor_favorita = cor
    DadosP.Tem_pet = pet 

console.table(DadosP)

let DadosP2 = new Object()
    DadosP2.Nome2 = nome2
    DadosP2.Sobrenome2 = sobre2
    DadosP2.Idade2 = idade2
    DadosP2.Estado_Civil2 = es2
    DadosP2.Cor_favorita2 = cor2
    DadosP2.Tem_pet2 = pet2

console.table(DadosP2)