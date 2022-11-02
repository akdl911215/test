function* generate() {
  yield 1;
  yield 2;
  return 3;
}
function* generate2() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generate();
const generator2 = generate2();

for (let value of generator) {
  console.log(value);
}
for (let value of generator2) {
  console.log(value);
}
// const one = generator.next();
// console.log(JSON.stringify(one));
// const two = generator.next();
// console.log(JSON.stringify(two));
// const three = generator.next();
// console.log(JSON.stringify(three));
