import faker from 'faker';

// function that accepts a reference for a html element. The function should do everything necessary to start the app, produce html and then render it into the specified element. The goal for this function is to be able to manage whether or not to render the element right away or to let other developers decide when, how and where to do it
const mount = el => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  
  el.innerHTML = products;
  // this logic is applicable to other frameworks. For instance, with react, we could have finished the function with ReactDOM.render(<App />, el);
};


// now we need to decide whether or not we want to run the function right away (dev and isolation) or serve the function so other developers can use as necessary


if (process.env.NODE_ENV === 'development') { // process.env.NODE_ENV is automatically set by webpack. It is set development because we added mode: 'development' on our webpack config

  // after checking whether we are in development mode, now we need to check if we are running in isolation (it assumes the container will not have an element with the id we are using here. Be sure to think about an unique id)
  const el = document.querySelector('#dev-products');
  if (el) {
    mount(el);
  }
}

// To let the CONTAINER team choose
export { mount };