import templater from './templater';
import index from '../pages/index.json';
import product from '../pages/product.json';

if (window.location.pathname === '/') {
  document.getElementById('root').innerHTML = templater(index);
} else if (window.location.pathname === '/product') {
  document.getElementById('root').innerHTML = templater(product);
}
