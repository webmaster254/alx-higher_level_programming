#!/usr/bin/node
const firstArgument = process.argv[2];
const secondArgument = process.argv[3];

function add (a, b) {
  return a + b;
}

if (Number.isInteger(Number(firstArgument)) && Number.isInteger(Number(secondArgument))) {
  console.log(add(Number(firstArgument), Number(secondArgument)));
} else {
  console.log('One or both arguments are not integers');
}
