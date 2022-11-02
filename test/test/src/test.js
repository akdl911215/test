const text = `이'정현'은 "배아"파`;
const arr = [...text];
console.log("arr : ", arr);

const arr2 = [];
for (let i = 0; i < arr.length; ++i) {
  const text2 = arr[i];
  arr2.push(text2.replace("'", "char(39)"));
}
console.log("arr2 : ", arr2);

const text3 = arr2.join("");
console.log("text3 : ", text3);

// const tmp = text.replace("'", "char(39)");

// console.log("tmp : ", tmp);
