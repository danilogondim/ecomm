import faker from 'faker';

let products = '';

for (const i = 0; i < 3; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

console.log(products);