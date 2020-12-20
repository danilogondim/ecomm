import { mount as productsMount } from 'products/ProductsIndex'; // instead of just running the file, we are importing the specific function to call it when we need
import { mount as cartMount } from 'cart/CartShow';

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));