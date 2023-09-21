'use strict';

const { EventEmitter } = require("./events");

let optionsDefault = {
    debug: false
};

class ATCommand extends EventEmitter {
    buffer = '';
    constructor(uart, options = optionsDefault) {
    }

    send(
        cmb,
        cb = function () { },
        waitFor = ['OK', 'ERROR', 'FAIL'],
        options = {
            timeout: 10000,
            sendAsData: false
        }) {
    }

    /**
     * @callback Handler
     * @param {string} line The matched line.
     * @param {string} buffer The response buffer.
     */
    /**
     * @param {string} match A match string.
     * @param {Handler} handler Handler function.
     */
    addHandler(match, handler) {
    }

    removeHandler(match) {
    }

}

module.exports = {
    ATCommand
}