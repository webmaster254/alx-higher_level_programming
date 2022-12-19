#!/usr/bin/node
const firstArgument = process.argv[2];

if (Number.isInteger(Number(firstArgument))) {
  console.log(`My number: ${Number(firstArgument)}`);
} else {
  console.log("Not a number");
}
