// Calculate Tax
function calculateTax(amount) {
  return amount * 0.10;
}

// Convert To UpperCase
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Find Maximum
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Is Palindrome
function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

// Calculate Discounted Price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };