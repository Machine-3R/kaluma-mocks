'use strict';

const fs = require('fs');

class Storage {
    _instance = null;
    #items = [];
    #path = process.cwd() + '/storage.json';

    constructor() {
        if (Storage._instance) {
            return Storage._instance;
        }
        Storage._instance = this;
        this.#writeItems();    
    }

    get length() {
        return this.#items.length;
    }

    getItem(key) {
        return this.#items.find((el) => el.key === key);
    }

    setItem(key, value) {
        let item = this.getItem(key);
        if (item) {
            item.value = value;
        } else {
            item = { key, value };
            this.#items.push(item);
        }
        this.#writeItems();
    }

    removeItem(key) {
        let index = this.#items.findIndex((el) => el.key === key);
        this.#items.splice(index, 1);
        this.#writeItems()
    }

    clear() {
        this.#items.length = 0;
        this.#deleteItems();
    }

    #readItems() {
        fs.readFileSync(this.#path, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            this.#items = JSON.parse(data);
        });
    }

    #writeItems() {
        let json = JSON.stringify(this.#items);
        fs.writeFileSync(this.#path, json, 'utf8', (err) => {
            if (err) {
                throw err;
            }
            this.#readItems();
        });
    }

    #deleteItems() {
        fs.unlinkSync(this.#path, (err)=>{
            if (err) {
                throw err;
            }
        });
    }
}
Storage.getInstance = function () {
    "use strict";
    return Storage._instance || new Storage();
}

module.exports = {
    Storage
};
