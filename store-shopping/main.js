//**! === CSS Style & Modules */
import './style.css';
//**! === Components & Modules === */
//import { setupCounter } from './counter.js';
/* const modules = {
  './modules/header.js': () => import('./modules/header.js'),
  './modules/main.js': () => import('./modules/main.js'),
}; */
import { headerPlus } from './modules/header';
import { mainPlus } from './modules/main';

//** ==== === APP === ==== */
document.querySelector('#app').innerHTML = `
${headerPlus}
${mainPlus}
`;

//setupCounter(document.querySelector('#counter'));
