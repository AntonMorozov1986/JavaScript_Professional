const scriptCalc = require('../src/js/main');
const add = scriptCalc.add;
const sub = scriptCalc.sub;
const div = scriptCalc.div;
const mul = scriptCalc.mul;

/**
 * Темтирование функции сложения
 */
describe('функция сложения двух чисел "a" и "b" add(a, b)', () => {
  it('должна возвращать 8 при аргументах 5 и 3', function () {
    expect(add(5, 3)).toBe(8);
  });
  it('должна возвращать -3 при аргументах 8 и -11', function () {
    expect(add(8, -11)).toBe(-3);
  });
  it('должна возвращать null при аргументах 8 и null', function () {
    expect(add(8, null)).toBe(null);
  });
  it('должна возвращать null при аргументах null и 8', function () {
    expect(add(null, 8)).toBe(null);
  });
  it('должна возвращать undefined при аргументах 8 и undefined', function () {
    expect(add(8, undefined)).toBe(undefined);
  });
  it('должна возвращать undefined при аргументах undefined и 8', function () {
    expect(add(undefined, 8)).toBe(undefined);
  });
});

/**
 * Тестирование функции вычитания
 */
describe('функция вычитания двух чисел "a" и "b" sub(a, b)', () => {
  it('должна возвращать 3 при аргументах 8 и 5', function () {
    expect(sub(8, 5)).toBe(3);
  });
  it('должна возвращать 13 при аргументах 8 и -5', function () {
    expect(sub(8, -5)).toBe(13);
  });
  it('должна возвращать undefined при аргументах undefined и 8', function () {
    expect(sub(undefined, 8)).toBe(undefined);
  });
  it('должна возвращать undefined при аргументах 8 и undefined', function () {
    expect(sub(8, undefined)).toBe(undefined);
  });
  it('должна возвращать null при аргументах 8 и null', function () {
    expect(sub(8, null)).toBe(null);
  });
  it('должна возвращать null при аргументах null и 8', function () {
    expect(sub(null, 8)).toBe(null);
  });
});

/**
 * Тестирование функции умножения
 */
describe('функция умножения двух чисел "a" и "b" mul(a, b)', () => {
  it('должна возвращать 28 при аргументах 4 и 7', function () {
    expect(mul(4, 7)).toBe(28);
  });
  it('должна возвращать -24 при аргументах 8 и -3', function () {
    expect(mul(8, -3)).toBe(-24);
  });
  it('должна возвращать undefined при аргументах undefined и 7', function () {
    expect(mul(undefined, 7)).toBe(undefined);
  });
  it('должна возвращать undefined при аргументах 7 и undefined', function () {
    expect(mul(7, undefined)).toBe(undefined);
  });
  it('должна возвращать null при аргументах 7 и null', function () {
    expect(mul(7, null)).toBe(null);
  });
  it('должна возвращать null при аргументах null и 7', function () {
    expect(mul(null, 7)).toBe(null);
  });
});

/**
 * Тестирование функции деления
 */
describe('функция деления двух чисел "a" и "b" div(a, b)', () => {
  it('должна возвращать 3 при аргументах 27 и 9', function () {
    expect(div(27, 9)).toBe(3);
  });
  it('должна возвращать -4 при аргументах 32 и -8', function () {
    expect(div(32, -8)).toBe(-4);
  });
  it('должна возвращать undefined при аргументах undefined и 9', function () {
    expect(div(undefined, 9)).toBe(undefined);
  });
  it('должна возвращать undefined при аргументах 9 и undefined', function () {
    expect(div(9, undefined)).toBe(undefined);
  });
  it('должна возвращать null при аргументах 9 и null', function () {
    expect(div(9, null)).toBe(null);
  });
  it('должна возвращать null при аргументах null и 9', function () {
    expect(div(null, 9)).toBe(null);
  });
});
