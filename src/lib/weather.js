class Weather {
    constructor() {
        this.apiKey = `f7ca993d9ffdeadb0feac2b7f3671e57`;
    }

    async getWeather(city) {
        city = city != undefined ? city : 'Manizales';
        let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`);

        return weather.json();
    }
}

export default Weather;