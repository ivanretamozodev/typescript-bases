(() => {
  const hero: string = "Flash";
  function retutnHeroName(): string {
    return hero;
  }
  const callBatman = (): string => {
    return "Batman is Comming!";
  };

  console.log(typeof callBatman);
})();
