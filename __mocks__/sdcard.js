'use strict';

let optionsDefault = {
    sck: undefined,
    mosi: undefined,
    miso: undefined,
    cs: 0
};
class SDCard {
    constructor(bus, options = optionsDefault) {
    }

    read(block, buffer, offset = 0) {
    }

    write(block, buffer, offset=0) {
    }

    ioctl(op, ...arg) {
    }
}

module.exports = {
    SDCard
};