(() => {
  //const numbers: (number | string | boolean)[] = [1, 2, 3, 4, 5, "6"];
  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  const superHeroes: string[] = ["Spider-Man", "Dr Strange", "Superman"];
  superHeroes.forEach((hero) => console.log(hero.toLocaleUpperCase()));
  console.log(numbers);
})();
