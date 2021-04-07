import fs from 'fs';
import bmpjs from 'bmp-js';

var bmpBuffer = fs.readFileSync('Syngenta.bmp');
var bmpData = bmpjs.decode(bmpBuffer);

let a;
let b;
let g;
let r;

let count = 0;

const tamanhoPorLinha = 1680;

// A
// B
// G
// R

for (let i = tamanhoPorLinha * 0; i < tamanhoPorLinha * bmpData.height; i+=4) {
    a = bmpData.getData()[i];
    b = bmpData.getData()[i+1];
    g = bmpData.getData()[i+2];
    r = bmpData.getData()[i+3];

    if (a == 0 && b == 0 && g == 192 && r == 96) {
        // console.log(i);
        count++;
    }
}

console.log(`Quantidade: ${count}`);