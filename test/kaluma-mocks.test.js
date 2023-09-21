'use strict';

jest.useFakeTimers();

it('requires adc', function () {
    expect(()=>require('adc')).not.toThrow();
});

it('requires analog-io', function () {
    expect(()=>require('analog-io')).not.toThrow();
});

it('requires at', function () {
    expect(()=>require('at')).not.toThrow();
});

it('requires board', function () {
    expect(()=>require('board')).not.toThrow();
});

it('requires button', function () {
    expect(()=>require('button')).not.toThrow();
});

it('requires console', function () {
    expect(()=>require('console')).not.toThrow();
});

it('requires pico_cyw43', function () {
    expect(()=>require('pico_cyw43')).not.toThrow();
});

it('requires device-driver', function () {
    expect(()=>require('device-driver')).not.toThrow();
});

it('requires digital-io', function () {
    expect(()=>require('digital-io')).not.toThrow();
});

it('requires errors', function () {
    expect(()=>require('errors')).not.toThrow();
});

it('requires events', function () {
    expect(()=>require('events')).not.toThrow();
});

it('requires fs', function () {
    expect(()=>require('fs')).not.toThrow();
});

it('requires flash', function () {
    expect(()=>require('flash')).not.toThrow();
});

it('requires global', function () {
    expect(()=>require('global')).not.toThrow();
});

it('requires gpio', function () {
    expect(()=>require('gpio')).not.toThrow();
});

it('requires graphics', function () {
    expect(()=>require('graphics')).not.toThrow();
});

it('requires http', function () {
    expect(()=>require('http')).not.toThrow();
});

it('requires i2c', function () {
    expect(()=>require('i2c')).not.toThrow();
});

it('requires interrupts', function () {
    expect(()=>require('interrupts')).not.toThrow();
});

it('requires led', function () {
    expect(()=>require('led')).not.toThrow();
});

it('requires net', function () {
    expect(()=>require('net')).not.toThrow();
});

it('requires path', function () {
    expect(()=>require('path')).not.toThrow();
});

it('requires process', function () {
    expect(()=>require('process')).not.toThrow();
});

it('requires pwm', function () {
    expect(()=>require('pwm')).not.toThrow();
});

it('requires rp2', function () {
    expect(()=>require('rp2')).not.toThrow();
});

it('requires rtc', function () {
    expect(()=>require('rtc')).not.toThrow();
});

it('requires sdcard', function () {
    expect(()=>require('sdcard')).not.toThrow();
});

it('requires spi', function () {
    expect(()=>require('spi')).not.toThrow();
});

it('requires storage', function () {
    expect(() => require('storage')).not.toThrow();

    const { Storage } = require('storage');
    let storage = Storage.getInstance();
    let originalLength = storage.length;
    expect(storage).toBeInstanceOf(Storage);

    let testItem = {
        key: 'key',
        value: 'value'
    };
    storage.setItem(testItem.key, testItem.value);
    expect(storage.length).toEqual(originalLength + 1);

    let item = storage.getItem(testItem.key);
    expect(item.value).toBe(testItem.value);

    storage.removeItem(testItem.key);
    item = storage.getItem(testItem.value);
    expect(item).toBeUndefined();
    expect(storage.length).toEqual(originalLength);

    storage.clear();
    expect(storage.length).toEqual(0);
});

it('requires stream', function () {
    expect(()=>require('stream')).not.toThrow();
});

it('requires timers', function () {
    expect(()=>require('timers')).not.toThrow();
});

it('requires uart', function () {
    expect(()=>require('uart')).not.toThrow();
});

it('requires url', function () {
    expect(()=>require('url')).not.toThrow();
});

it('requires wdt', function () {
    expect(()=>require('wdt')).not.toThrow();
});

it('requires wifi', function () {
    expect(()=>require('wifi')).not.toThrow();
});


