(() => {
  class Avenger {
    //private name: string;
    //private team: string;
    //public realName: string;
    static avgAge: number = 34;
    static getAvgAge(): string {
      return this.name;
    }
    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio(): string {
      return `${this.name} (${this.realName})`;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Avengers", "Scott Lang");
  //console.log(antman);

  //console.log(antman.bio());
  //console.log(Avenger.getAvgAge());
})();
