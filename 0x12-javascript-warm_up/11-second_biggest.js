#!/usr/bin/node
const secondBiggest = (...numbers) => {
  // If no argument passed or only one argument passed, print 0
  if (numbers.length <= 1) {
    console.log(0);
    return;
  }

  // Sort the numbers in descending order
  numbers.sort((a, b) => b - a);

  // The second biggest number is the second element in the sorted array
  console.log(numbers[1]);
}
