function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(1, 2, sum));


setTimeout(function () {
    console.log("Hola JavaScript");
}, 5000);

function greetings(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greetings, 2000, "Santiago");

