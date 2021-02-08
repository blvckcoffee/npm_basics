import pkg from 'lodash';

const { first, last } = pkg;

let words = ['sky', 'wood', 'forest', 'falcon', 'pear', 'ocean', 'universe'];

let firstElement = first(words);
let lastElement = last(words);

console.log(`First element: ${firstElement}`);
console.log(`Last element: ${lastElement}`);
