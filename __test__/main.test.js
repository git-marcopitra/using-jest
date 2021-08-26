const makeItNull = () => null;

describe(makeItNull.name, () => {
  it("always returns null", () => {
    expect(makeItNull()).toBe(null);
  });
});
