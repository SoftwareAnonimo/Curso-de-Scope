const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}
                    
var scope = "i am Global";

const functionScope = () => {
    var scope = "i am Jus a Local";
    const func = () => {
        return scope
    }
    console.log(func());
};

functionScope();
console.log(scope);