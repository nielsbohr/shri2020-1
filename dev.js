import './prod';
import templater from './src/js/templater';
import index from './src/pages/index.json';
import product from './src/pages/product.json';

const root = document.getElementById('root');
const path = window.location.pathname.replace('/', '');

switch (path) {
  case 'p':
    root.innerHTML = templater(product);
    break;
  default:
    root.innerHTML = templater(index);
}
