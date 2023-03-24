"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
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
    const printName = (mutant) => {
        console.log(mutant.name);
    };
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.realName})`;
        }
    }
    Avenger.avgAge = 34;
    const antman = new Avenger("Antman", "Avengers", "Scott Lang");
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avengers!");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen!");
        }
        get fullName() {
            return `${this.name}-${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
})();
(() => {
    class Ironman {
        constructor(name) {
            this.name = name;
        }
        static callIronman() {
            if (!Ironman.instance) {
                Ironman.instance = new Ironman("i am ironman");
            }
            return Ironman.instance;
        }
        changeName(name) {
            this.name = name;
        }
    }
    const ironman1 = Ironman.callIronman();
    const ironman2 = Ironman.callIronman();
    const ironman3 = Ironman.callIronman();
    ironman1.changeName("another name");
})();
//# sourceMappingURL=main.js.map