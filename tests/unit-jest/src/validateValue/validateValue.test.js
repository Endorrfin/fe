
const validateValue = require('./validateValue');

test ('Валидация значения', () => {
  expect(validateValue(50)).toBe(true);
})

describe('validateValue', () => {
  test ('Корректное значение', () => {
    expect(validateValue(50)).toBe(true);
  })

  test ('Less correct', () => {
    expect(validateValue(-1)).toBe(false);
  })

  test ('More correct', () => {
    expect(validateValue(101)).toBe(false);
  })

  test ('Пограничное значение снизу', () => {
    expect(validateValue(0)).toBe(true);
  })

  test ('Пограничное значение сверху', () => {
    expect(validateValue(100)).toBe(true);
  })
})

