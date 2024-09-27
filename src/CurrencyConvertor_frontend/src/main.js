const currencyFirstE1 = document.getElementById("currency-first")

const worthFirstE1 = document.getElementById("worth-first")

const currencySecondE1 = document.getElementById("currency-second")

const worthSecondE1 = document.getElementById("worth-second")

const exchangeRateE1 = document.getElementById("exchange-rate")

updateRate()

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/c288e2f5c9aaa16e64bc5a58/latest/USD`)
    .then((res)=>res.json())
    .then((data)=>{
        const rate = data.conversion_rates [currencySecondE1.value]
        exchangeRateE1.innerText = `1${currencyFirstE1.value} = ${rate + " " + currencySecondE1}`

        worthSecondE1.value = (worthFirstE1.value * rate).toFixed(2)
})
}

currencyFirstE1.addEventListener("change", updateRate)

currencySecondE1.addEventListener("change", updateRate)

worthFirstE1.addEventListener("input", updateRate)