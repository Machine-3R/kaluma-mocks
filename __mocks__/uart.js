'use strict';

class UART {
    static PARITY_NONE = 0;
    static PARITY_ODD = 1;
    static PARITY_EVEN = 2;
    static FLOW_NONE = 0;
    static FLOW_RTS = 1;
    static FLOW_CTS = 2;
    static FLOW_RTS_CTS = 3;
    #baudrates = [0, 50, 75, 110, 134, 150, 200, 300, 600, 1200, 1800, 2400, 4800, 9600, 19200, 38400, 57600, 115200, 230400];

    constructor(port, options = {
        baudrate: 19200,
        bits: 8,
        parity: UART.PARITY_NONE,
        stop: 1,
        flow: UART.FLOW_NONE,
        bufferSize: -1,
        tx: -1,
        rx: -1,
        cts: -1,
        rts: -1
    }) {
    }

    write(data, options = {
        count: 1
    }) {
    }

    close() {
    }

    on(event) {
    }

}

module.exports = {
    UART
}