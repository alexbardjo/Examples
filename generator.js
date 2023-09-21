const formula = (item) => (item * 16807) % 2147483647;

function* pseudoRandom(seed) {
  let item = seed;

  for (let i = 0; i <= Infinity; i++) {
    item = formula(item);
    yield item;
  }

  // while (true) {
  //   item = formula(item);
  //   yield item;
  // }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
