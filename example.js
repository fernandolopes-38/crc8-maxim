import { crc8 } from './lib/crc8.js'

// CRC8
let data = '12345';
let checksum = crc8(data);

console.log(checksum.toString(16));
