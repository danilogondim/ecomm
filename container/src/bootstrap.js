import { mount } from 'products/ProductsIndex'; // instead of just running the file, we are importing the specific function to call it when we need
import 'cart/CartShow';

mount(document.querySelector('#my-products'));