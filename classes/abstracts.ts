(() => {
  abstract class Mutant {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutant {
    beHero() {
      return "i am a hero!";
    }
  }
  class Villian extends Mutant {
    beVillian() {
      return "i am a villian!";
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan");
  const magneto = new Villian("Magneto", "Magnus");

  //console.log(wolverine);
  //console.log(magneto);

  //console.log(wolverine.beHero());
  //console.log(magneto.beVillian());

  const printName = (mutant: Mutant) => {
    console.log(mutant.name);
  };

  //printName(wolverine);
})();
