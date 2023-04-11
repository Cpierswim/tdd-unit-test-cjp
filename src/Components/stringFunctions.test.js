import { concat, capitalizeWord, secondWord } from "./stringFunctions";

describe("concatenation tests", () => {
  it('concating "test" and "test" should be "testtest"', () => {
    expect(concat("test", "test")).toBe("testtest");
  });

  it('concating "test" and "test" should not be "test test"', () => {
    expect(concat("test", "test")).not.toBe("test test");
  });
});

describe("capitalization tests", () => {
  it('capitalizing "test" should be "Test', () => {
    expect(capitalizeWord("test")).toBe("Test");
  });

  it('capitalizing "t" should be "T', () => {
    expect(capitalizeWord("t")).toBe("T");
  });

  it('capitalizing "test" should not be "TEST', () => {
    expect(capitalizeWord("TEST")).not.toBe("Test");
  });
});

describe("second word tests", () => {
  it('getting the second word from "get second word" should be "second"', () => {
    expect(secondWord("get second word")).toBe("second");
  });

  it('getting the second word from "get second word" should be "second"', () => {
    expect(secondWord("word")).toBe("");
  });

  it('getting the second word from "get second word" should not be "get"', () => {
    expect(secondWord("get second word")).not.toBe("get");
  });
});
