import templater from './templater';
import index from '../pages/index.json';
import product from '../pages/product.json';

const root = document.createElement('div');
document.body.appendChild(root);

if (window.location.pathname === '/') {
  root.innerHTML = templater(index);
} else if (window.location.pathname === '/product') {
  root.innerHTML = templater(product);
}
