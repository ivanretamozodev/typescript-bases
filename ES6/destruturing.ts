(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    active: boolean;
    power: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    active: true,
    power: 1500,
  };

  //const { power, vision } = avengers;
  //console.log(power.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ vision, ...other }: Avengers) => {
    console.log(vision, other);
  };

  //printAvenger(avengers);

  const avengersArr: string[] = ["Captain America", "Ironman", "Hulk"];

  //const ironman = avengersArr[1];

  const [captain, ironman] = avengersArr;

  //console.log(ironman, captain);
})();
