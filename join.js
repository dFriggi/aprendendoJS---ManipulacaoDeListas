const lista = [{nome: "Davi"}, {nome: "Pedro"}, {nome: "Manuela"}, {nome: "Danilo"},] 

console.log(lista.map((e) => e.nome)
            .filter((e) => e.startsWith("D"))
            .join(" e "))

const nomeHTML = lista.filter((e) => e.nome.startsWith("D"))
                    .map(e => `<li>${e.nome}</li>`)
                    .join(" e ")

console.log(nomeHTML)







/*join serve para juntar elementos de um array por meio de uma string, sendo possível fazer para HTML também:

lista.filter((e) => e.nome.startsWith("D")
            .map((e) => `
                <li>
                ${nome}
                </li>
            )
            .join(" e ")

            */