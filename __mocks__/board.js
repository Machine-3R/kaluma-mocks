'use strict';

const { INPUT } = require('global');
const { GPIO } = require('gpio');
const { LED } = require('led');
const { Button } = require('button');
const { PWM } = require('pwm');
const { ADC } = require('adc');
const { I2C } = require('i2c');
const { SPI } = require('spi');
const { UART } = require('uart');

const Board = function () {
    'use strict';
    if (Board._instance) {
        return Board._instance;
    }
    Board._instance = this;

    this.name = 'pico';
    this.LED = null;

    this.gpio = function (pin, mode = INPUT) {
        return new GPIO(pin, mode);
    }

    this.led = function (pin) {
        return new LED(pin);
    }

    this.button = function (pin, options) {
        return new Button(pin, options);
    }

    this.pwm = function (pin, frequency, duty) {
        return new PWM(pin, frequency, duty);
    }

    this.adc = function (pin) {
        return new ADC(pin);
    }

    this.i2c = function (bus, options) {
        return new I2C(bus, options);
    }

    this.spi = function (bus, options) {
        return new SPI(bus, options);
    }

    this.uart = function (port, options) {
        return new UART(bus, options);
    }


};
Board.getInstance = function () {
    "use strict";
    return Board._instance || new Board();
}

module.exports = {
    Board
}