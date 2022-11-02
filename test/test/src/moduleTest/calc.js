exports.add = function (arg1, arg2) {
  console.log("이건 콘솔로만 나오지요");
  return arg1 + arg2;
};

module.exports.add2 = (arg1, arg2) => arg1 + arg2;
