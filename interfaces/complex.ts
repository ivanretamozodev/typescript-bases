(() => {
  interface Client {
    name: string;
    age: number;
    adress: Adress;
    getFullAdress(id: string): void;
  }

  interface Adress {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Ivan",
    age: 28,
    adress: {
      id: 123,
      zip: "asdad",
      city: "asadsd",
    },
    getFullAdress(id: string) {
      return this.adress.city;
    },
  };

  //console.log(client);
})();
