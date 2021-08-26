const { sumNumbers } = require('..');

describe(sumNumbers.name, () => {
  test('Verify if sum numbers {1; 2; 3; 4} returns a number', () => {
    const summedNumbers = sumNumbers([1, 2, 3, 4]);

    expect(typeof summedNumbers).toBe('number');
  });

  test('Verify if sum numbers {1; 2; 3; 4} returns a 10', () => {
    const summedNumbers = sumNumbers([1, 2, 3, 4]);

    expect(summedNumbers).toBe(10);
  });

  test('Verify if sum any numbers or a empty array returns a 0', () => {
    const summedNumbers = sumNumbers([]);

    expect(summedNumbers).toBe(0);
  });

  it('Verify if sum any numbers or a empty array returns a 0', () => {
    const summedNumbers = sumNumbers([]);

    expect(summedNumbers).toBe(0);
  });
});
