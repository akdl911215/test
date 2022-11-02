const reg = new Date();
const year = reg.getFullYear();
const month = reg.getMonth() + 1;
const month2 = month >= 10 ? month : "0" + month;
const date = reg.getDate() >= 10 ? reg.getDate() : "0" + reg.getDate();
const hours = reg.getHours() >= 10 ? reg.getHours() : "0" + reg.getHours();
const minutes =
  reg.getMinutes() >= 10 ? reg.getMinutes() : "0" + reg.getMinutes();
const seconds =
  reg.getSeconds() >= 10 ? reg.getSeconds() : "0" + reg.getSeconds();

const regdate = `${year}-${month2}-${date} ${hours}:${minutes}:${seconds}`;
console.log("regdate : ", regdate);
const tmp = regdate.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");
console.log("tmp : ", tmp);
