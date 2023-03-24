(() => {
  class Ironman {
    static instance: Ironman;
    private constructor(public name: string) {}
    static callIronman(): Ironman {
      if (!Ironman.instance) {
        Ironman.instance = new Ironman("i am ironman");
      }
      return Ironman.instance;
    }
    changeName(name: string) {
      this.name = name;
    }
  }

  const ironman1 = Ironman.callIronman();
  const ironman2 = Ironman.callIronman();
  const ironman3 = Ironman.callIronman();
  ironman1.changeName("another name");

  //console.log(ironman1, ironman2, ironman3);
  //const ironman1 = new Ironman("Iam Ironman 1");
  //const ironman2 = new Ironman("Iam Ironman 2");
  //const ironman3 = new Ironman("Iam Ironman 3");
  //console.log(ironman);
})();
