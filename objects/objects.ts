(() => {
  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["High Velocity", "Time Traveler"],
    getName() {
      return this.name;
    },
  };

  let Batman: {
    name: string;
    age?: number;
    powers: string[];
    getName: () => string;
  } = {
    name: "Batman",
    //age: 40,
    powers: ["Super Intelicense"],
    getName() {
      return this.name;
    },
  };

  console.log(flash.getName());
})();
