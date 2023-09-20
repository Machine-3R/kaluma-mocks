# kaluma.js-mocks
I love to use [Kalumajs](https://kalumajs.org/) on my Raspberry Pico's.<br/>
But when writing code I like to testrun it on my Windows PC, which fails, because it doesn't recognize the Kaluma classes and functions.

I use Jest for testing and creating mocks for simulating the Kaluma UF2.


## Creating a new project
[Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) on Github

### or use a present one
then:
```git
$ git remote add kaluma-mocks git@github.com:Machine-3R/kaluma-mocks.git
$ git pull kaluma-mocks master
```
If the last line failed because of "fatal: refusing to merge unrelated histories" :
```git
git pull kaluma-mocks master --allow-unrelated-histories
```

## Now you have the code, time to make it work

Go to the [Jest Home](https://jestjs.io/docs/getting-started) for installation instructions.

I prefer to install Jest globally.
```javascript
  npm install jest --global
```

Create a [Jest config file](https://jestjs.io/docs/configuration) if not present.<br/>
Edit Jest config file:
```javascript
  ...
  setupFiles: [
    './jest.kaluma-mocks.setupFile.js'
  ],
  ...
```

Run the tests:
```javascript
  jest ./kaluma-mocks.test.js
```

Example:
```javascript
// example.js
console.log(`
name:    ${board.name}
LED pin: ${board.LED}
`);

const led = board.LED;
pinMode(led, OUTPUT);
setInterval(() => {
    console.log('LED status:', board.led(board.LED).read());
    digitalToggle(led);
}, 1000);
```
```javascript
// example.test.js
'use strict';

jest.useFakeTimers();

it("should not fail", () => {
    require('./example.js');
});
```
```javascript
  jest ./example.test.js
```

Have Fun!




Required software:
- [Git](https://git-scm.com/)
- [Nodejs](https://nodejs.org/)
- [Kalumajs](https://kalumajs.org/)
- [Jestjs](https://jestjs.io/docs/getting-started)