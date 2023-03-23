"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const sayHello = (name) => `Hello! ${name}`;
    const saveTheWorld = () => `The World Is Safe!`;
    //let myFunction: Function;
    //let myFunction: (a: number, b: number) => number;
    //let myFunction: (a: string) => string;
    let myFunction;
    //!myFunction = 10;
    //!console.log(myFunction);
    //myFunction = addNumbers;
    //console.log(myFunction(1, 2));
    //myFunction = sayHello;
    //console.log(myFunction("Ivan"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
