const { Algoritmo } = require('../index');

describe('Caminos simples con: A, B y C', () => {

    test('A = V | B = V | C = V', () => {
      expect(Algoritmo(true, true, true)).toBe(1);
    });

    test('A = V | B = V | C = F', () => {
      expect(Algoritmo(true, true, false)).toBe(1);
    });

    test('A = V | B = F | C = V', () => {
      expect(Algoritmo(true, false, true)).toBe(2);
    });

    test('A = V | B = F | C = F', () => {
      expect(Algoritmo(true, false, false)).toBe(0);
    });

    test('A = F | B = V | C = V', () => {
      expect(Algoritmo(false, true, true)).toBe(2);
    });

    test('A = F | B = V | C = F', () => {
      expect(Algoritmo(false, true, false)).toBe(0);
    });

    test('A = F | B = F | C = V', () => {
      expect(Algoritmo(false, false, true)).toBe(2);
    });

    test('A = F | B = F | C = F', () => {
      expect(Algoritmo(false, false, false)).toBe(0);
    });
    
})
