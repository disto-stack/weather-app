import Weather from './weather';

class App {
    constructor() {
        this.weather = new Weather();

        this.infoContent = document.querySelector('#info-content');
        this.loading = document.querySelector('#loading');

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

        this.infoContent.style.display = "none";
        this.loading.style.display = "flex";
    }

    renderElements() {       
        let dataHtml = `
            <img alt="Weather state icon" id="weatherIcon" src="http://openweathermap.org/img/wn/${this.data.weather[0].icon}@4x.png">
            <div id="weather-detail">
                <h2 id="city">${this.data.name}</h2>
                <p id="temperature">${Math.round(this.data.main.temp - 273.15)} °C</p>
                <p id="state">${this.data.weather[0].main}</p>
            </div>
        `

        document.querySelector('#info-content').innerHTML = dataHtml;
    
        this.loading.style.display = "none";
        this.infoContent.style.display = "flex";
    }
}

export default App;