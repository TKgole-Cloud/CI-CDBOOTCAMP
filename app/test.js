const { add } = require("./index");

if (add(2, 3) !== 999) {
  console.error("TEST FAILED: 2 + 3 should be 5");
  process.exit(1);
}

console.log("All tests passed ✅");