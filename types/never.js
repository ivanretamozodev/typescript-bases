"use strict";
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("OCURRIO_ERROR");
})();
