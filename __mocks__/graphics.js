'use strict';

let GraphicsContextOptionsDefaults = {
    rotation: 0,
    setPixel: function(x, y, color) {
    },
    getPixel: function(x,y) {
    },
    fillRect: null
};
let drawBitmapOptionsDefaults = {
    color:0xffff,
    transparent: 0,
    scaleX: 1,
    scaleY: 1,
    flipX: false,
    flipY: false
};
let BufferedGraphicsContextOptionsDefaults = {
    rotation: 0,
    bpp: 16,
    display: function(buffer) {
    }
};

class GraphicsContext {
    constructor(width, height, options = GraphicsContextOptionsDefaults) {
    }

    getWidth() {
    }

    getHeight() {
    }

    clearScreen() {
    }

    color16(red, green, blue) {
    }

    fillScreen(color) {
    }

    setRotation(rotation) {
    }

    getRotation() {
    }

    setColor(color) {
    }

    getColor() {
    }

    setFillColor() {
    }

    getFillColor() {
    }

    setFontColor() {
    }

    getFontColor() {
    }

    setFont(font) {
    }

    setFontScale() {
    }

    setPixel(x,y,color) {
    }

    getPixel(x,y) {
    }

    drawLine(x0,y0,x1,y1) {
    }

    drawRect(x,y,w,h) {
    }

    drawCircle(x,y,r) {
    }

    fillCircle(x,y,r) {
    }

    drawRoundRect(x,y,w,h,r) {
    }

    fillRoundRect(x,y,w,h,r) {
    }

    drawText(x,y,text) {
    }

    measureText(text) {
    }

    drawBitmap(x,y,bitmap, options=drawBitmapOptionsDefaults) {
    }
}

class BufferedGraphicsContext extends GraphicsContext {
    
    buffer = null;
    
    constructor(width, height, options = BufferedGraphicsContextOptionsDefaults) {
    }

    display() {
    }
}

module.exports = {
    GraphicsContext,
    BufferedGraphicsContext
};