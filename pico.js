
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
