(() => {
  const fullName = (name: string, lastname: string): string => {
    return `${name} ${lastname}.`;
  };

  const name = fullName("Tony", "Stark");
})();
