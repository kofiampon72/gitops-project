const { add, subtract } = require('./app');

describe('Math Functions', () => {
  
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('handles negative numbers correctly', () => {
    expect(add(-1, -1)).toBe(-2);
  });

});
