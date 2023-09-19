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
    }

    disconnect(cb = function () { }) {
    }

    getConnection(cb = function () { }) {
    }

}

module.exports = {
    WiFi
};
