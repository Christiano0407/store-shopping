import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
//import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <main class="main__container" id="main">
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
  </main>
`;

//setupCounter(document.querySelector('#counter'));
