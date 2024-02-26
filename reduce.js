const lista = [1,2,3,4,5,6,7,8,9,10]

let somaNumbers = lista.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current
}, 0/*esse segundo parâmetro é o valor inicial*/)

console.log(somaNumbers)
/*reduce é percorrer um array e transformá-lo em um único elemento*/