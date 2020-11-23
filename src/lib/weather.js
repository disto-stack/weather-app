class Weather {
    constructor(city) {
        this.city = (city.length > 0 && city != undefined) ? city : 'Manizales';
        this.apiKey = `f7ca993d9ffdeadb0feac2b7f3671e57`;
    }

    async getWeather() {
        let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

        return weather.json();
    }
}

export default Weather;