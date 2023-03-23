"use strict";
(() => {
    const fullName = (name, lastname) => {
        return `${name} ${lastname || "No Last Name"}.`;
    };
    const name = fullName("Tony");
    console.log(name);
})();
