'use strict';

class SPI {
    static MODE_0 = 0;
    static MODE_1 = 1;
    static MODE_2 = 2;
    static MODE_3 = 3;
    static MSB = 0;
    static LSB = 1;

    constructor(bus, options = {
        mode: SPI.MODE_0,
        baudrate: 3000000,
        bitorder: SPI.MSB,
        sck: -1,
        mosi: -1,
        miso: -1
    }) {
    }

    transfer(data, timeout=5000) {
    }

    send(data, timeout=5000, count=1) {
    }

    recv(length, timeout=5000) {
    }

    close() {
    }
}

module.exports = {
    SPI
}