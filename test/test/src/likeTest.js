const text = '남욱 "4천억 도둑질" 녹취록에도 기소는 절반?…檢 배임액수 논란';
const titleArr = [...text];
const replaceTitle = titleArr.map((el) => el.replace("'", `''`)).join("%");
console.log("replaceTitle :: ", replaceTitle);

// const arr = [...text];

// const arr2 = [];
// for (let i = 0; i < arr.length; ++i) {
//   const text2 = arr[i];
//   arr2.push(text2.replace(`'`, `''`), "%");
// }
// console.log("arr2 : ", arr2);

// const text3 = arr2.join("");
// console.log("text3 : ", text3);
