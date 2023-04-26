const { recursive } = require("./binarySearch");

test("binarySearch, num exists", () => {
  const sorted = [1, 2, 3, 4, 5];
  const numberToFind = 3;
  const realNumberIndex = 2;

  expect(recursive(sorted, numberToFind)).toBe(realNumberIndex);
});

test("binarySearch, num doesn't exist", () => {
  const sorted = [1, 2, 4, 5];
  const numberToFind = 3;
  const realNumberIndex = null;

  expect(recursive(sorted, numberToFind)).toBe(realNumberIndex);
});
