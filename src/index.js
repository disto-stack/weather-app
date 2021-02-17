// Styles
import './css/styles.css';
import 'normalize.css'

import 'regenerator-runtime';
import App from './lib/app';

const app = new App();

document.querySelector('#app-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    let errorAd = document.querySelector('#error-ad');
    let location = document.querySelector('#location').value;
    
    errorAd.style.display = "none";
    try {

        await app.getWeatherData(location);
        app.renderElements();

    } catch (error) {
        errorAd.style.display = "block";
    }
});


