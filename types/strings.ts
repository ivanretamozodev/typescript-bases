(() => {
  const batman: string = "Batman";
  const greenLantern: string = "Green Lantern";
  const superman: string = `Superman`;

  console.log(`I'am, ${greenLantern}`);
  console.log(batman.toLocaleUpperCase());
  console.log(batman[10]?.toUpperCase() || "Dont exist");
})();
