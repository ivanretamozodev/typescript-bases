(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironMan: Avenger = {
    name: "IronMan",
    weapon: "Armor Suit",
  };

  const captainAmerica: Avenger = {
    name: "Captain America",
    weapon: "Shield",
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [ironMan, thor, captainAmerica];

  for (const avenger of avengers) {
    // console.log(avenger.name, avenger.weapon);
  }
})();
