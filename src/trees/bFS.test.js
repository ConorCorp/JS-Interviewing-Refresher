const bFS = require("./bFS");
const Tree1234 = require("./structures/Tree1234");

test("bFS Tree 1234, 4", () => {
  const numberToFind = 4;
  const numberOfExpectedVisits = 4;

  expect(bFS(Tree1234, numberToFind)).toBe(numberOfExpectedVisits);
});

test("bFS Tree 1234, num doesn't exist", () => {
  const numberToFind = 5;
  const numberOfExpectedVisits = null;

  expect(bFS(Tree1234, numberToFind)).toBe(numberOfExpectedVisits);
});
