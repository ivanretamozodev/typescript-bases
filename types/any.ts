(() => {
  let avenger: any = 123;
  let exist;
  let power;

  avenger = "Dr Strange";
  //console.log(avenger.charAt(0));
  console.log((avenger as string).charAt(0));

  avenger = 150.12345;
  console.log((<number>avenger).toFixed());

  console.log(exist);
  console.log(power);
})();
