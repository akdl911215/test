const num = 1;

function outerFunction() {
    const num = 10;
    innerFunction();
}

function innerFunction() {
    console.log(num);
}

outerFunction();