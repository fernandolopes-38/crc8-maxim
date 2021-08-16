'use strict';
import { Buffer } from 'buffer'
import { maxim } from '../algorithms/crc8/maxim.js'; 

export const crc8 = (data) => {
  if (!Buffer.isBuffer(data)) data = Buffer.from(data);

  const {
    init,
    xorOut,
    table
  } = maxim;
  let crc = init;

  for (const b of data)
    crc = table[crc ^ b];

  return (crc ^ xorOut) & 0xFFFF;
}
