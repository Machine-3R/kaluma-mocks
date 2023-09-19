'use strict';

it('global', function () {
    expect(global).toHaveProperty('LOW');
    expect(global).toHaveProperty('HIGH');
    expect(global).toHaveProperty('INPUT');
    expect(global).toHaveProperty('OUTPUT');
    expect(global).toHaveProperty('INPUT_PULLUP');
    expect(global).toHaveProperty('INPUT_PULLDOWN');
    expect(global).toHaveProperty('LOW_LEVEL');
    expect(global).toHaveProperty('HIGH_LEVEL');
    expect(global).toHaveProperty('FALLING');
    expect(global).toHaveProperty('RISING');
    expect(global).toHaveProperty('CHANGE');
    expect(global).toHaveProperty('print');
    expect(global).toHaveProperty('seed');
    expect(global).toHaveProperty('btoa');
    expect(global).toHaveProperty('atob');
    expect(global).toHaveProperty('encodeURIComponent');
    expect(global).toHaveProperty('decodeURIComponent');
})

it('board', function () {
    expect(global).toHaveProperty('board');
})


it('analog-io', function () {
    expect(global).toHaveProperty('analogRead');
    expect(global).toHaveProperty('analogWrite');
    expect(global).toHaveProperty('tone');
    expect(global).toHaveProperty('noTone');
})

it('digital-io', function () {
    expect(global).toHaveProperty('pinMode');
    expect(global).toHaveProperty('digitalRead');
    expect(global).toHaveProperty('digitalWrite');
    expect(global).toHaveProperty('digitalToggle');
    expect(global).toHaveProperty('setWatch');
    expect(global).toHaveProperty('clearWatch');
    expect(global).toHaveProperty('pulseRead');
    expect(global).toHaveProperty('pulseWrite');
})
