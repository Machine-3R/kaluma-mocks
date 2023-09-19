'use strict';

function dormant(pins, events = []) {
}

const PIO = {
    FIFO_JOIN_NONE: undefined,
    FIFO_JOIN_TX: undefined,
    FIFO_JOIN_RX: undefined,
    SHIFT_LEFT: undefined,
    SHIFT_RIGHT: undefined,
    TX_LESSTHAN: undefined,
    RX_LESSTHAN: undefined,
}

let ASMoptionsDefaults = {
    sideset: 0,
    sidesetOpt: false,
    sidesetPindirs: false
};
class ASM {
    constructor(options = optionsDefaults) {
    }

    jmp(cond = null, target) {
    }

    wait(pol, src, idx, rel = '') {
    }

    in(src, bits) {
    }

    out(dst, bits) {
    }

    push(iffull = 0, block = 1) {
    }

    pull(ifempty = 0, block = 1) {
    }

    mov(dst, src) {
    }

    irq(cmd = '', irqnum, rel = '') {
    }

    set(dst, val) {
    }

    nop() {
    }

    label(name) {
    }

    side(val) {
    }

    delay(val) {
    }

    wrap_target() {
    }

    wrap() {
    }

    toBinary() {
    }

    toInst(idx) {
    }

    get labels() {
    }
}
let StateMachineOptionsDefaults = {
    freq: 125000000,
    inBase: -1,
    inCount: 1,
    outBase: -1,
    outCount: 1,
    setBase: -1,
    setCount: 1,
    sidesetBase: -1,
    jmpPin: -1,
    inShiftDir: PIO.SHIFT_RIGHT,
    autopush: false,
    pushThreshold:32,
    outShiftDir: PIO.SHIFT_RIGHT,
    autopull: false,
    pullThreshold:32,
    fifoJoin: PIO.FIFO_JOIN_NONE,
    outSticky: false,
    outEnablePin: -1,
    movStatusSel:PIO.TX_LESSTHAN,
    movStatusN: 0
};
class StateMachine {
    constructor(id, asm, options = StateMachineOptionsDefaults) {
    }

    active(value) {
    }

    restart() {
    }

    exec(inst) {
    }

    get() {
    }

    put(value) {
    }

    setPins(value,mask = undefined) {
    }

    rxfifo() {
    }

    txfifo() {
    }

    clearFIFOs() {
    }

    drainTXFIFO() {
    }

    irq(handler) {
    }
}
StateMachine.getAvailableId = function() {
}

module.exports = {
    dormant,
    PIO,
    ASM,
    StateMachine
};