import Weather from './weather';

class App {
    constructor(city) {
        this.weather = new Weather(city);

        this.img = document.querySelector('#weatherIcon');
        this.city = document.querySelector('#city');
        this.temperature = document.querySelector('#temperature');
        this.state = document.querySelector('#state');

        // Render initial elements
        this.renderElements();
    }

    async getWeatherData() {
        this.data = await this.weather.getWeather();
    }

    renderElements() {
        this.city.innerHTML = this.data.name;

        this.img.setAttribute('src', `http://openweathermap.org/img/wn/${this.data.weather[0].icon}@4x.png`);
        this.state.innerHTML = this.data.weather[0].main;

        this.temperature = this.data.main.temp;
    }
}

export default App;