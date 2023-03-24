(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName: () => string;
  };

  let myCustomVariable: string | number | Hero = "Ivan";
  console.log(typeof myCustomVariable);
  myCustomVariable = 20;
  console.log(typeof myCustomVariable);
})();
