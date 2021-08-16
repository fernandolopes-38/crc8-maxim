import * as chai from 'chai';
import { crc8 } from '../index.js';

chai.should();
const check = Buffer.from([0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39]);// 0123456789

describe('CRC8', function () {
   describe('MAXIM', function () {
      it('should return 0x75', function (done) {
         const crcCheck = crc8(check);
         crcCheck.should.equal(0x75);
         done();
      });
   });
});
