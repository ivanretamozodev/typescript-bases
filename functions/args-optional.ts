(() => {
  const fullName = (name: string, lastname?: string): string => {
    return `${name} ${lastname || "No Last Name"}.`;
  };

  const name = fullName("Tony");
  console.log(name);
})();
