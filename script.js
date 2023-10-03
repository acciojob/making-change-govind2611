const makeChange = (c) => {
  if (c <= 0 || c >= 100) {
    return "Invalid input. The amount should be between 1 and 99 cents.";
  }

  const quarters = Math.floor(c / 25);
  c %= 25;

  const dimes = Math.floor(c / 10);
  c %= 10;

  const nickels = Math.floor(c / 5);
  c %= 5;

  const pennies = c;

  return { "q": quarters, "d": dimes, "n": nickels, "p": pennies };
};

// Example usage:
const c = prompt("Enter c: ");
const result = makeChange(c);
console.log(result);
