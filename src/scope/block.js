const fruits = () => {
    if (true) {
        var fruist1 = 'Apple';
        let fruits2 = 'Banana';
        const fruits3 = 'Kiwi';

        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruist1);
}

fruits();

var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunction();