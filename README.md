
A **cyclic redundancy check** (CRC) node module.  
It supports crc8 MAXIM algorithm.

## Acknowledgement

This a library was cloned from [easy-crc](https://github.com/Fabio286/easy-crc) library. It was modified for a specific use of one of the CRC-8 Algorithm.

## Installation

```bash
npm install @fuknando/crc8-maxim
```
```
yarn add @fuknando/crc8-maxim
```



## Usage

```js
import { crc8 } from '@fuknando/crc8-maxim';

// CRC8
let data = 'AA5503005012';
let checksum = crc8(data);

console.log(checksum);// "0a"
```

## Available algorithms

### CRC8

- MAXIM

## Running tests

```bash
npm test
```
