const lista = [1,2,3,4,5,6,7,8,9,10]

const listaDeNumerosPares = lista.filter((element) => {
    return (element%2 === 0)
})

console.log(lista)
console.log(listaDeNumerosPares)
/*filter é um método que filtra certos resultados especificos dentro de um array e retorna-os para a função,
sem alterar o array original. Ele recebe uma função que retorna um valor boolean, se for TRUE, o elemento
fica na lista, se for false, ele sai*/