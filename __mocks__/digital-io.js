'use strict';

const { INPUT, LOW, CHANGE } = require('global');

function pinMode(pin, mode = INPUT) {
}

function digitalRead(pin) {
}

function digitalWrite(pin, value = LOW) {
}

function digitalToggle(pin) {
}

function setWatch(cb, pin, events = CHANGE, debounce = 0) {
}

function clearWatch(id) {
}

let optionsDefaults = {
    timeout: 1000000,
    startState: undefined,
    mode: null, // unclear documentation (to me)
    trigger: {
        pin: null,
        startState: LOW,
        interval: [] // refer to pulseWrite()
    }
};
function pulseRead(pin, count, options=optionsDefaults) {
}

function pulseWrite(pin, startState, interval) {
}

module.exports = {
    pinMode,
    digitalRead,
    digitalWrite,
    digitalToggle,
    setWatch,
    clearWatch,
    pulseRead,
    pulseWrite
}