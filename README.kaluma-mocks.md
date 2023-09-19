# kaluma.js-mocks
I love to use [Kalumajs](https://kalumajs.org/) on my Raspberry Pico's.<br/>
But when writing code I like to testrun it on my Windows PC, which fails, because it doesn't recognize the Kaluma classes and functions.

I use Jest for testing and creating mocks for simulating the Kaluma UF2.

Go to the [Jest Home](https://jestjs.io/docs/getting-started) for installation instructions.

Create a [Jest config file](https://jestjs.io/docs/configuration) if not present.<br/>
Edit config file:
```javascript
  ...
  setupFiles: [
    './jest.kaluma-mocks.setupFile.js'
  ],
  ...
```

