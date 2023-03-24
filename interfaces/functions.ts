(() => {
  interface AddTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbers: AddTwoNumbers;

  addNumbers = (a: number, b: number) => {
    return 10;
  };
})();
