const buildCount = (i) => {
    let cound = i;
    const displayCound = () => {
        console.log(cound++);
    };
    return displayCound;
};

const myCound = buildCount(1);
myCound();
myCound();
myCound();

const myOrderCound = buildCount(10);
myOrderCound();
myOrderCound();