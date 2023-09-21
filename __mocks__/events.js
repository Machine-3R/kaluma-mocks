
class EventEmitter {
    constructor() {
        this.events = {};
    }

    addListener(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName.push(listener)];
    }

    emit(eventName, ...args) {
        const event = this.events[eventName];
        if (event) {
            event.forEach(listener => {
                listener.call(null, ...args);
            });
        }
    }

    on = this.addListener;

    once(eventName, listener) {
        this.on(eventName, listener);
        this.on(eventName, () => {
            this.removeListener(eventName, listener);
        });
    }

    removeListener(eventName, listener) {
        this.events[eventName] = this.events[eventName]
            .filter(eventListener => listener !== eventListener);

    }

    removeAllListeners(eventName = null) {
        if (eventName) {
            this.events[eventName].length = 0;
        } else {
            this.events.length = 0;
        }
    }

    off = this.removeListener;

    listeners(eventName) {
        return this.events[eventName];
    }

    listenerCount(eventName) {
        return this.events[eventName].length;
    }
}

module.exports = {
    EventEmitter
};