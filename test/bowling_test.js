const { expect } = require("chai");

let globalScore = (scoreBoard) => {
  let turnScore = 0;
  for (const turn of scoreBoard) {
    turnScore += turn[0] + turn[1];
  }
  return turnScore;
};

it("should return a globalScore of 9", function () {
  expect(globalScore([[9, 0]])).to.equal(9);
});

it("should return a globalScore of 8", function () {
  expect(globalScore([[8, 0]])).to.equal(8);
});

it("should return a sum of bowling turns", function () {
  const throwsList = [
    [8, 0],
    [0, 0],
    [0, 0],
    [4, 0],
    [0, 0],
  ];
  expect(globalScore(throwsList)).to.equal(12);
});

it("should return a zero globalScore", function () {
  const thowsList = [[0, 0]];
  expect(globalScore(thowsList)).to.equal(0);
});
