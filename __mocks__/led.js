'use strict';

class LED {
    pin = null;
    #value = false;

    constructor(pin) {
        this.pin = pin;
    }

    on() {
        this.#value = true;
    }

    off() {
        this.#value = false;
    }

    toggle() {
        this.#value = !this.#value;
    }

    read() {
        return this.#value;
    }
}

module.exports = {
    LED
};