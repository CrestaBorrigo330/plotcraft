const generateUUID = require('./generateUUID')
const numberArrayToString = require('./numberArrayToString')
const flattenArray = require('./flattenArray')
const truncateString = require('./truncateString')
const isPalindrome = require('./isPalindrome')

module.exports = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }