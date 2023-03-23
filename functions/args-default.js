"use strict";
(() => {
    const fullName = (name, lastname, upper = false) => {
        if (upper) {
            return `${name} ${lastname || "No Last Name"}.`.toUpperCase();
        }
        return `${name} ${lastname || "No Last Name"}.`;
    };
    const name = fullName("Tony", "Stark", true);
    console.log(name);
})();
