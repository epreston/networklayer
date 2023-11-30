import './css/style.css';
import favIconUrl from './img/favicon.svg';
import { Clock } from 'networklayer';

const ticker = new Clock();

ticker.start();

document.querySelector('#app').innerHTML = `
  <a href="https://github.com/epreston/networklayer" target="_blank">
    <img src="${favIconUrl}" class="logo" alt="favourite icon" />
  </a>
  <h1>Hello World !</h1>
  <a href="https://github.com/epreston/networklayer" target="_blank">NetworkLayer</a>
`;

ticker.stop();

// eslint-disable-next-line no-console
console.log(`Loaded in ${ticker.getElapsedTime()}`);
