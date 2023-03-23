(() => {
  const fullName = (
    name: string,
    lastname?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${name} ${lastname || "No Last Name"}.`.toUpperCase();
    }
    return `${name} ${lastname || "No Last Name"}.`;
  };

  const name = fullName("Tony", "Stark", true);
  console.log(name);
})();
