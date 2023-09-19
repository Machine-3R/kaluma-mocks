'use strict';

function analogRead(pin) {
}

function analogWrite(pin, duty = 0.5, frequency = 490) {
}

let optionsDefaults = {
    duration: 0,
    duty: 0.5,
    inversion: -1
};
function tone(pin, frequency = 261626, options = optionsDefaults) {

}

function noTone(pin) {

}

module.exports = {
    analogRead,
    analogWrite,
    tone,
    noTone
}