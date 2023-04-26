const { dFSRecurse, dFSTreeHeight } = require("./dFS");
const Tree1234 = require("./structures/Tree1234");
const Tree1236 = require("./structures/Tree1236");
const TreeLine = require("./structures/TreeLine");

test("dFS Tree 1234, 4", () => {
  const numberToFind = 4;
  const numberOfExpectedVisits = 3;

  expect(dFSRecurse(Tree1234, numberToFind)).toBe(numberOfExpectedVisits);
});

test("dFS Tree 1236, 4", () => {
  const numberToFind = 6;
  const numberOfExpectedVisits = 4;

  expect(dFSRecurse(Tree1236, numberToFind)).toBe(numberOfExpectedVisits);
});

test("dFS Tree 1234, num doesn't exist", () => {
  const numberToFind = 5;
  const numberOfExpectedVisits = null;

  expect(dFSRecurse(Tree1234, numberToFind)).toBe(numberOfExpectedVisits);
});

test("dFS height 1234, 2", () => {
  const expectedHeight = 2;

  expect(dFSTreeHeight(Tree1234)).toBe(expectedHeight);
});

test("dFS height 1236, 2", () => {
  const expectedHeight = 2;

  expect(dFSTreeHeight(Tree1236)).toBe(expectedHeight);
});

test("dFS height TreeLine, 3", () => {
  const expectedHeight = 3;

  expect(dFSTreeHeight(TreeLine)).toBe(expectedHeight);
});
