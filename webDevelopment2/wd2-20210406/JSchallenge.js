// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array
// of multiples of num until the array length reaches length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Convenience Store
// Given a total due and an array representing the amount of change in your pocket, determine
// whether or not you are able to pay for the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having
// 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true
// changeEnough([30, 40, 20, 5], 12.55) ➞ true
// changeEnough([10, 0, 0, 50], 3.85) ➞ false
// changeEnough([1, 0, 5, 219], 19.99) ➞ false

// Notes
// ● quarter: 25 cents / $0.25

// CICCC Web &amp; Mobile App Development April 2021

// 2

// ● dime: 10 cents / $0.10
// ● nickel: 5 cents / $0.05
// ● penny: 1 cent / $0.01

// Integer Digits Count

// Create a function that counts the integer&#39;s number of digits.

// Examples
// count(318) ➞ 3
// count(-92563) ➞ 5
// count(4666) ➞ 4
// count(-314890) ➞ 6
// count(654321) ➞ 6
// count(638476) ➞ 6
// Notes
// ● For an added challenge, try to solve this without using strings.
// ● Optionally, you can solve this via a recursive approach.
// ● A recursive version of this challenge can be found via this link.