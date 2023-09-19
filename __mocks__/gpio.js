'use strict';

const { INPUT, LOW, HIGH } = require('global');

class GPIO {
    constructor(pin, mode = INPUT) {
        this.mode = mode;
        this.pin = pin;
        this.value = 0;

        this.read = function () {
            return this.value;
        };

        this.write = function (value) {
            this.value = value % 2;
        };

        this.toggle = function () {
            this.value = !this.value;
        };

        this.low = function () {
            this.write(LOW);
        };

        this.high = function () {
            this.write(HIGH);
        };

        this.irq = function (cb, event) {
        };
    }
};

module.exports = {
    GPIO
}



