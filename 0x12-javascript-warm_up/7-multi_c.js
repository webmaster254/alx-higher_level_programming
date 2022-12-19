#!/usr/bin/node
const firstArgument = process.argv[2];

if (Number.isInteger(Number(firstArgument))) {
  for (let i = 0; i < Number(firstArgument); i++) {
    console.log("C is fun");
  }
} else {
  console.log("Missing number of occurrences");
}
