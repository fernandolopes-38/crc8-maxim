import { crc8 } from './lib/crc8.js'

// CRC8
let data = 'AA5503005012';
let checksum = crc8(data);

console.log(checksum);
