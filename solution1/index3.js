
const value = (str) => str.split(",").reverse().join(",");
console.log(value("Apple"));

const palindrome = (str) => str.split(",").reverse().join(",") === str
console.log(palindrome("hello"));

