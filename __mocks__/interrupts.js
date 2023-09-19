'use strict';

const {CHANGE} = require('global');

function attachInterrupt(pin, cb, events = CHANGE) {
}

function detachInterrupt(pin) {
}

function enableInterrupts() {
}

function disableInterrupts() {
}

module.exports = {
    attachInterrupt,
    detachInterrupt,
    enableInterrupts,
    disableInterrupts
};