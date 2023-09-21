const { EventEmitter } = require("./events");

const ConnectInfo  = {
    ssid: 'SSID',
    password: undefined,
    bssid: undefined,
    security: 'OPEN',
    enforce: false
}

class WiFi extends EventEmitter {

    constructor() {
    }

    reset(cb = function () { }) {
    }

    scan(cb = function () { }) {
    }

    connect(connectInfo = ConnectInfo, cb = function () { }) {
        this.emit('associated'); // This event is emitted when Wi-Fi network is connected. IP may not be assigned.
        this.emit('connected'); // This event is emitted when Wi-Fi network is connected with IP assignment.
    }

    disconnect(cb = function () { }) {
        this.emit('disconnected'); // This event is emitted when Wi-Fi network is disconnected.
    }

    getConnection(cb = function () { }) {
    }
}

module.exports = {
    WiFi
};
