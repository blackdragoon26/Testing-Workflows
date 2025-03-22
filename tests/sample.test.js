const { ap } = require("../index");

test("adds 2 + 3 to equal 5", () => {
    expect(ap(2, 3)).toBe(5);
  });