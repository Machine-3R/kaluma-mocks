
const EventEmitter = function() {

    this.addListener = function(eventName, listener) {
    }

    this.emit = function(eventName, ...args) {
    }

    this.on = function(eventName, listener) {
    }

    this.once = function(eventName, listener) {
    }

    this.removeListener = function(eventName, listener) {
    }

    this.removeAllListeners = function(eventName = null) {
    }

    this.off = this.removeListener;

    this.listeners = function(eventName) {
    }

    this.listenerCount = function(eventName) {
    }
}

module.exports = {
    EventEmitter
};