import Weather from './weather';

class App {
    constructor() {
        this.weather = new Weather();

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

        document.querySelector('#info-container').innerHTML = '';
    }

    renderElements() {
        let { name, main: { temp }} = this.data;
        let { icon, main } = this.data.weather[0];   
        
        let dataHtml = `
            <div id="info-content">
                <img alt="Weather state icon" id="weatherIcon" src="http://openweathermap.org/img/wn/${icon}@4x.png">
                <div id="weather-detail">
                    <h2 id="city">${name}</h2>
                    <p id="temperature">${Math.round(temp - 273.15)} °C</p>
                    <p id="state">${main}</p>
                </div>
            </div>
        `

        document.querySelector('#info-container').innerHTML = dataHtml;
    }
}

export default App;