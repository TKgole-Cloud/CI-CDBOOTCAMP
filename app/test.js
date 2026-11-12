const { add } = require("./index");
const isOdd = require("is-odd");

if (add(2, 3) !== 5) {
  console.error("TEST FAILED: 2 + 3 should be 5");
  process.exit(1);
}

if (!isOdd(7)) {
  console.error("TEST FAILED: 7 should be odd");
  process.exit(1);
}

if (isOdd(4)) {
  console.error("TEST FAILED: 4 should not be odd");
  process.exit(1);
}

console.log("All tests passed ✅");