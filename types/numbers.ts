(() => {
  let avengers: number = 10;

  console.log(avengers);

  let villians: number = 20;

  if (villians > avengers) {
    console.log("Los Avengers estan en problemas");
  } else {
    console.log("Nos Salvamos");
  }

  villians = Number("55A");
  console.log(villians);
})();
