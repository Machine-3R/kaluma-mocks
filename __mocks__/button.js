'use strict';

const { EventEmitter } = require("./events");
const { INPUT_PULLUP, FALLING } = require("./global");

let optionDefaults = {
    mode: INPUT_PULLUP,
    event: FALLING,
    debounce: 50
};

class Button extends EventEmitter {
    #pin = null;
    #value = LOW;
    #options = {
        mode: INPUT_PULLUP,
        event: FALLING,
        debounce: 50
    }

    constructor(pin, options = optionDefaults) {
        this.#pin = pin;
    }

    read() {
    }

    close() {
    }
}

module.exports = {
    Button
}