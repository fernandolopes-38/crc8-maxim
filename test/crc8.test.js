import * as chai from 'chai';
import { crc8 } from '../index.js';

chai.should();
const check = '0123456789';// 0123456789

describe('CRC8', function () {
   describe('MAXIM', function () {
      it('should return 15', function (done) {
         const crcCheck = crc8(check);
         crcCheck.should.equal('15');
         done();
      });
   });
});
