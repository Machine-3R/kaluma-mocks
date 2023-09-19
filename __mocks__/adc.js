'use strict';

class ADC {
    PINS = [31,32,34];
    pin = null;
    #value = -1;

    constructor(pin) {
        if (ADC.PINS.includes(this.pin)) {
            this.pin = pin;
        }
    }

    read() {
        if (!this.pin) {
            throw new Error('Channel number out of range', -44);
        }
        return this.#value;
    }
}

module.exports = {
    ADC
};