class Pessoa {
    constructor(name){
        this.name = name
    }
}

const lista = [new Pessoa('Davi'), new Pessoa('Pedro'), new Pessoa('Manuela'), new Pessoa('Giovanna')] 

let listaNames = lista.map((element) => element.name)//em uma arrow function, se é ncessario explicitar o return, só colocar o que a funcao retornará

let listaNamesHTML = lista.map((element) => {
    return `
        <li>
            ${element.name}
        </li>   
         `
//dessa maneira é possível retornar um texto HTML
})
/*
for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    listaNames.push(element.name)
}
Essa maneira percorres os nomes de cada pessoa da lista e trasporta para a variável listaNames, que é justamente
o método map: Uma função que transforma os objetos de um array em outros objetos, que é o caso dos nomes 
*/
console.log(listaNames)
console.log(listaNamesHTML)