'use strict';

class Storage {
    _instance = null;
    _items = [];

    constructor() {
        if (Storage._instance) {
            return Storage._instance;
        }
        Storage._instance = this;
    }


    get length() {
        return this._items.length;
    }

    getItem(key) {
        return this._items.find((el) => el.key === key);
    }

    setItem(key, value) {
        let item = this.getItem(key);
        if (item) {
            item.value = value;
        } else {
            item = { key, value };
            this._items.push(item);
        }
    }

    removeItem(key) {
        let index = this._items.findIndex((el) => el.key === key);
        this._items.splice(index, 1);
    }

    clear() {
        this._items.length = 0;
    }

}
Storage.getInstance = function () {
    "use strict";
    return Storage._instance || new Storage();
}


module.exports = {
    Storage
};