'use strict';

class PicoCYW43 {

    constructor() {
    }

    getGPIO(gpio) {
    }

    putGPIO(gpio, value) {
    }
}

class PicoCYW43WIFI {
    wifiApMode(apInfo, cb = function () { }) {
    }

    disableWifiApMode() {
    }

    getWifiApClients() {
    }
}

class PicoCYW43Network {

}

module.exports = {
    PicoCYW43,
    PicoCYW43WIFI,
    PicoCYW43Network
}