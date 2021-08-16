'use strict';
import { maxim } from '../algorithms/crc8/maxim.js'; 

export const crc8 = (data) => {
  for (var bytes = [], c = 0; c < data.length; c += 2)
    bytes.push(parseInt(data.substr(c, 2), 16));

  const {
    init,
    xorOut,
    table
  } = maxim;
  let crc = init;

  for (const b of bytes)
    crc = table[crc ^ b];

  return ('0' + ((crc ^ xorOut) & 0xFFFF).toString(16)).slice(-2);
}
