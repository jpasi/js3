
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
        let esFamilia = [list[0]]

        for(let persona of list.slice(1))
        if(persona.sobre ===  esFamilia[0].sobre){
            esFamilia = [persona]
        
        } else if (persona.sobre === esFamilia[0].sobre) {
            esFamilia.push(registro)
          }

        return esFamilia
    } 