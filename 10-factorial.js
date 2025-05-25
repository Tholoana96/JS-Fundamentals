function factorial(n) {
  if (isNaN(n) || n < 1) return 1;
  return n === 1 ? 1 : n * factorial(n - 1);
}
const num = parseInt(process.argv[2]);
console.log(factorial(num));
