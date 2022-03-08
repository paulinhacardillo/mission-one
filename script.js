let button = document.getElementById("button")
let select = document.getElementById("select-moedas")


async function ConverterEmMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
        return resposta.json()

    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high


    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dólar Americano") {
        let ValorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = ValorEmDolares.toLocaleString("en-us", { style: "currency", currency: "USD" })

    }

    if (select.value === "€ Euro") {
        let ValorEmEuro = inputValorEmReais / euro
        inputMoedas.innerHTML = ValorEmEuro.toLocaleString("de-DE", { style: "currency", currency: "EUR" })

    }

    textoReal.innerHTML = inputValorEmReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" })



}

function TrocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")


    if (select.value === "US$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./IMG/EUA.png"
    }
    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./IMG/EURO.png"
    }

    ConverterEmMoedas()
}

select.addEventListener("change", TrocaDeMoeda)
button.addEventListener("click", ConverterEmMoedas)



