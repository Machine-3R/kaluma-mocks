'use strict';

const {
    LOW,
    HIGH,
    INPUT,
    OUTPUT,
    INPUT_PULLUP,
    INPUT_PULLDOWN,
    LOW_LEVEL,
    HIGH_LEVEL,
    FALLING,
    RISING,
    CHANGE,
    print,
    seed,
    btoa,
    atob,
    encodeURIComponent,
    decodeURIComponent
} = require('./__mocks__/global');
global.LOW = LOW;
global.HIGH = HIGH;
global.INPUT = INPUT;
global.OUTPUT = OUTPUT;
global.INPUT_PULLUP = INPUT_PULLUP;
global.INPUT_PULLDOWN = INPUT_PULLDOWN;
global.LOW_LEVEL = LOW_LEVEL;
global.HIGH_LEVEL = HIGH_LEVEL;
global.FALLING = FALLING;
global.RISING = RISING;
global.CHANGE = CHANGE;
global.print = print;
global.seed = seed;
global.btoa = btoa;
global.atob = atob;
global.encodeURIComponent = encodeURIComponent;
global.decodeURIComponent = decodeURIComponent;

const {
    analogRead,
    analogWrite,
    tone,
    noTone
} = require('./__mocks__/analog-io');
global.analogRead = analogRead;
global.analogWrite = analogWrite;
global.tone = tone;
global.noTone = noTone;

const {
    pinMode,
    digitalRead,
    digitalWrite,
    digitalToggle,
    setWatch,
    clearWatch,
    pulseRead,
    pulseWrite
} = require('./__mocks__/digital-io');
global.pinMode = pinMode;
global.digitalRead = digitalRead;
global.digitalWrite = digitalWrite;
global.digitalToggle = digitalToggle;
global.setWatch = setWatch;
global.clearWatch = clearWatch;
global.pulseRead = pulseRead;
global.pulseWrite = pulseWrite;

const { Board } = require('./__mocks__/board');
global.board = Board.getInstance();

const {
    netdev,
    ieee80211dev
} = require('./__mocks__/device-driver')
global.__netdev = netdev;
global.__ieee80211dev = ieee80211dev;

const {
    attachInterrupt,
    detachInterrupt,
    enableInterrupts,
    disableInterrupts
} = require('./__mocks__/interrupts');
global.attachInterrupt = attachInterrupt;
global.detachInterrupt = detachInterrupt;
global.enableInterrupts = enableInterrupts;
global.disableInterrupts = disableInterrupts;

const {
    dormant
} = require('./__mocks__/rp2');
global.dormant = dormant;

const {
    setTime,
    getTime
} = require('./__mocks__/rtc');
global.setTime = setTime;
global.getTime = getTime;

const {
    Storage
} = require('./__mocks__/storage');
global.storage = Storage.getInstance();

const {
    delay,
    millis,
    delayMicroseconds,
    micros
    // setTimeout,
    // setInterval,
    // clearTimeout,
    // clearInterval
} = require('./__mocks__/timers');
global.delay = delay;
global.millis = millis;
global.delayMicroseconds = delayMicroseconds;
global.micros = micros;
// global.setTimeout = setTimeout;
// global.setInterval = setInterval;
// global.clearTimeout = clearTimeout;
// global.clearInterval = clearInterval;