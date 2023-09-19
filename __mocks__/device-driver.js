'use strict';

const netdev = {
    errno: 0,
    mac: null, // mac address
    ip: null, // local ip address
    socket(domain, protocol) { },
    get(fd) { },
    connect(fd, addr, port, cb = (err) => { }) { },
    write(fd, data, cb = (err) => { }) { },
    close(fd, cb = (err) => { }) { },
    shutdown(fd, how, cb = (err) => { }) { },
    bind(fd, addr, port, cb = (err) => { }) { },
    listen(fd, cb = (err) => { }) { }
};

const ieee80211dev = {
    errno: 0,
    assoc_cb: () => { },
    connect_cb: () => { },
    disconnect_cb: () => { },
    reset(cb = (err) => { }) { },
    scan(cb = (err, scan_info) => { }) { },
    connect(connectInfo, cb = (err) => { }) { },
    disconnect(cb = (err) => { }) { },
    get_connection(cb = (err, conn) => { }) { }
};

module.exports = {
    netdev,
    ieee80211dev
};