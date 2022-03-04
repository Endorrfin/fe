const square = require('./square');

describe('square', () => {
  let mackValue;

  // Перед каждым тестом
  beforeEach(() => {

  })

  // Вызовиться 1 раз перед всеми тестами
  beforeAll( () => {

  })
  test ('correct values', () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();

    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  })

  test ('Pass 1', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  })

  test ('Exactly value', () => {
    expect(square(12)).toBe(144);
  })

  afterEach(() => {
    // Удалить из базы
    jest.clearAllMocks();
  })

  afterAll(() => {

  })
})
