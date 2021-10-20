var helo = 'Helo';
var helo = 'Hello +';
let world = 'Hello Word';
let Word = 'Hello Word Yas'
const heloWord = 'Hello Word!';

const anotherFunction = () => {
    console.log(helo);
    console.log(world)
    console.log(heloWord);
}

anotherFunction();

const helloWorld = () => {
    globalVar = 'im Global'
}

helloWorld();
console.log(globalVar);

const anotherFunctionPro = () => {
    var localVar = globalVar = 'im Global';
}

anotherFunction();
console.log(globalVar);