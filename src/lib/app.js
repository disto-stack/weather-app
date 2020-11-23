import Weather from './weather';

class App {
    constructor() {
        this.weather = new Weather();

        this.img = document.querySelector('#weatherIcon');
        this.city = document.querySelector('#city');
        this.temperature = document.querySelector('#temperature');
        this.state = document.querySelector('#state');

        // Render initial data
        this.loadInitial();
    }

    /**
     * Load initial data of App (Default location: Manizales-CO)
     */
    async loadInitial() {
        await this.getWeatherData();
        this.renderElements(); 
    }

    async getWeatherData(location) {
        this.data = await this.weather.getWeather(location);
    }

    renderElements() {
        this.city.innerHTML = this.data.name;

        this.img.setAttribute('src', `http://openweathermap.org/img/wn/${this.data.weather[0].icon}@4x.png`);
        this.state.innerHTML = this.data.weather[0].main;

        this.temperature.innerHTML = this.data.main.temp;
    }
}

export default App;