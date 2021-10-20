// var a = 'Hello';

// function hello() {
//     let b = 'Hello World';
//     const c = 'Helo World!';
//     if(true) {
//         let d = 'Hello World!!'
//         debugger
//     }
// };

// hello();

// const moneyBox = () => {
//     var saveCoins = 0;
//     const countCoins = (coins) => {
//         saveCoins += coins;
//         console.log(`MoneyBox: $${saveCoins}`);
//     }
//     return countCoins;
// };

// let myMoneyBox = moneyBox();

// myMoneyBox(4);
// myMoneyBox(6);
// myMoneyBox(10);

let scope = "hola"

function  juntarPalabras(nombre) {
    var juntar = scope;
    return juntar;
}

console.log(juntarPalabras)