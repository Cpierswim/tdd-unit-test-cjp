import { add, divide, multiply, subtract } from "./mathFunctions";

describe("add tests", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("adds 1 + 4 should not be 9", () => {
    expect(add(1, 4)).not.toBe(9);
  });
});

describe("divide tests", () => {
  it("divides 6 / 2 to equal 3", () => {
    expect(divide(6, 2)).toBe(3);
  });
  it("divides 6 / 3 should not be 5", () => {
    expect(divide(6, 2)).not.toBe(5);
  });
});

describe("multiply tests", () => {
  it("multiplies 2 * 4 to equal 8", () => {
    expect(multiply(2, 4)).toBe(8);
  });
  it("multiplies 1 * 5 should not be 4", () => {
    expect(multiply(1, 5)).not.toBe(4);
  });
});

describe("subtract tests", () => {
  it("subtracts 6 - 2 should be 4", () => {
    expect(subtract(6, 2)).toBe(4);
  });
  it("subtracts 6 - 2, should not be 3", () => {
    expect(subtract(6, 2)).not.toBe(3);
  });
});
