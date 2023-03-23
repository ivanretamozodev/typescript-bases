(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const sayHello = (name: string): string => `Hello! ${name}`;
  const saveTheWorld = (): string => `The World Is Safe!`;

  //let myFunction: Function;
  //let myFunction: (a: number, b: number) => number;
  //let myFunction: (a: string) => string;
  let myFunction: () => string;

  //!myFunction = 10;
  //!console.log(myFunction);

  //myFunction = addNumbers;
  //console.log(myFunction(1, 2));

  //myFunction = sayHello;
  //console.log(myFunction("Ivan"));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
