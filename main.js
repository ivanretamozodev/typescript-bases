"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["High Velocity", "Time Traveler"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: "Ivan",
        age: 28,
        adress: {
            id: 123,
            zip: "asdad",
            city: "asadsd",
        },
        getFullAdress(id) {
            return this.adress.city;
        },
    };
})();
(() => {
    let addNumbers;
    addNumbers = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map