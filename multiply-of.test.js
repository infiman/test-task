const { multiplyOf } = require('./multiply-of');

describe('test', () => {
  describe('multiplyOf', () => {
    test('undefined', () => {
      expect(multiplyOf()).toEqual('');
    });

    test('using multiplies [3, 5] with value 3', () => {
      expect(multiplyOf(3)).toEqual('G');
    });

    test('using multiplies [3, 5] with value 5', () => {
      expect(multiplyOf(5)).toEqual('N');
    });

    test('using multiplies [3, 5] with value 15', () => {
      expect(multiplyOf(15)).toEqual('GN');
    });

    test('using multiplies [3, 5] with value 11', () => {
      expect(multiplyOf(11)).toEqual('');
    });

    test('cache', () => {
      const value = 12;
      const cacheKey = `${value}::${JSON.stringify(
        multiplyOf.DEFAULT_DICTIONARY
      )}`;

      expect(multiplyOf.cache[cacheKey]).toEqual(undefined);

      multiplyOf(value);

      expect(multiplyOf.cache[cacheKey]).toBe(multiplyOf(value));

      multiplyOf(value);
    });
  });
});
