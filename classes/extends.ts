(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avengers!");
    }
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Constructor Xmen!");
    }

    get fullName() {
      return `${this.name}-${this.realName}`;
    }

    set fullName(name: string) {
      this.name = name;
    }

    getFullNameFromXmen() {
      console.log(super.getFullName());
    }
  }

  //const wolwerine = new Xmen("Wolwerine", "Logan", true);

  //console.log(wolwerine.fullName);
  //wolwerine.fullName = "Ivan";
  //console.log(wolwerine.fullName);

  //wolwerine.getFullNameFromXmen();
})();
