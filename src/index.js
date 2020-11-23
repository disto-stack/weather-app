// Styles
import './css/styles.css';
import 'normalize.css'

import 'regenerator-runtime';
import App from './lib/app';


const app = new App();

document.querySelector('#app-form').addEventListener('submit', async (event) => {
    event.preventDefault();
})


