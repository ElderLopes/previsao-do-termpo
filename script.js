
const key = '5e6530ceb49510de291753cd6f0e0536'

function addDados(dados) {

    console.log(dados)
    document.querySelector("h2").innerHTML = "Tempo em " + dados.name
    document.querySelector("#temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector("#prev").innerHTML = dados.weather[0].description
    document.querySelector("#img-icon").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector("#temp-max").textContent = Math.floor(dados.main.temp_max) + "°C";
    document.querySelector("#temp-min").textContent = Math.floor(dados.main.temp_min) + "°C";
    document.querySelector("#wind-speed").textContent = dados.wind.speed + " km/h";
    document.querySelector("#rain-prob").textContent = dados.rain ? (dados.rain['1h'] || dados.rain['12h']) + "%" : "0%";

    const umidadeElement = document.querySelector("#umid");
    umidadeElement.textContent = `Umidade: ${dados.main.humidity}%`;

}

async function seekCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric
    `).then(response => response.json())
    addDados(dados);
}

function clickButton() {
    const city = document.querySelector("input").value;
    seekCity(city);
}