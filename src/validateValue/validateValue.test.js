const validateValue = require("./validateValue");

test("validate value", () => {
  expect(validateValue(510)).toBe(false);
});

describe("validate value", () => {
  test("correct value", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("less value", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("more value", () => {
    expect(validateValue(101)).toBe(false);
  });
});
