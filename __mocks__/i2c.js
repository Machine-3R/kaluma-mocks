'use strict';

class I2C {
    static MASTER = 0;
    static SLAVE = 1;

    constructor(bus, options = {
        mode: I2C.MASTER,
        baudrate: 400000,
        scl: -1,
        sda: -1
    }) {
    }

    write(data, address, timeout = 5000, count = 1) {
    }

    read(length, address, timeout = 5000) {
    }

    memWrite(data, address, memAddress, memAddressSize = 8, timeout = 5000, count = 1) {
    }

    memRead(length, address, memAddress, memAddressSize = 16, timeout = 5000) {
    }

    close() {
    }
}

module.exports = {
    I2C
}