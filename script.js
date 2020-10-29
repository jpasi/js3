
var other = true

let list = []
let max = 0

function gente(nome, sobre, idade, cor){
    this.nome = nome
    this.sobre = sobre
    this.idade = idade
    this.cor = cor
    
}


   while (other === true){
    list.push(new gente (prompt("Nome"),prompt("Sobrenome"),prompt("Idade")))
           

        if (confirm ('Tem mais?')) {
            other = true
        } else {
            other = false
        }
    }

// Antes da aula de 27/10/2020

    console.log("Registros de:")
for ( let i=0; i < list.length; i++)
    console.log(list[i].nome)

    console.log("A pessoa mais velha é")
    for ( let i=0; i < list.length; i++) 
        list[i].idade = Number(list[i].idade)
    list.forEach(list => {
        if (list.idade > max){
            max = list.idade
        }
    })
        let item = list.find(item => item.idade === max)
        console.log(item.nome)

// Despues da aula 

function familia(list) {
    let esFamilia = [ list ]
    

    for(let persona of list) {
        if(persona.sobre === persona.sobre) {
            esFamilia = [persona]
        }
    for(let persona of list) {     
        if (persona.sobre === esFamilia[0].sobre) {
            esFamilia.push(persona)
            
        }    
    }
    }
     return esFamilia 
}
    let fam = familia(list)
    fam.shift()
    console.log("As pessoas na lista de abaixo tem o mesmo sobrenome:")
    for ( let i=0; i < fam.length; i++){
        console.log(fam[i].nome)
    }




    function obterMaisNovo (list) {
        let emaisnovo = [list[0] ]

        for(let persona of list) {
            if(persona.idade < emaisnovo[0].idade) {
                emaisnovo = [persona]
            }
        }

        return emaisnovo
    }
        let maisNovo = obterMaisNovo(list)
        for(let pn of maisNovo) {
        console.log(`A pessoa mais nova da lista é ${pn.nome}`)
        }