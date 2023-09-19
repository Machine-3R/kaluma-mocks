'use strict';

jest.useFakeTimers();

it("should not fail", () => {
    require('./pico.js');
});
