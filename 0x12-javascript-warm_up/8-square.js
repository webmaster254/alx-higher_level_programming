#!/usr/bin/node
const size = process.argv[2];

if (Number.isInteger(Number(size))) {
  for (let i = 0; i < Number(size); i++) {
    let row = '';
    for (let j = 0; j < Number(size); j++) {
      row += 'X';
    }
    console.log(row);
  }
} else {
  console.log('Missing size');
}
