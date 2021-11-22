const multiplyOf = (
  value,
  multipliesDictionary = multiplyOf.DEFAULT_DICTIONARY
) => {
  const cacheKey = `${value}::${JSON.stringify(multipliesDictionary)}`;

  // Checking cache for result to avoid unnecessary computation
  if (multiplyOf.cache[cacheKey]) {
    return multiplyOf.cache[cacheKey];
  }

  if (!value) {
    return '';
  }

  // Reducing through the list of multiplies and calculating the result
  const result = Object.keys(multipliesDictionary).reduce(
    (acc, multiply) =>
      value % multiply ? acc : `${acc}${multipliesDictionary[multiply]}`,
    ''
  );

  // Storing result into the cache under unique cache key
  multiplyOf.cache[cacheKey] = result;

  return result;
};

multiplyOf.DEFAULT_DICTIONARY = {
  3: 'G',
  5: 'N',
};
multiplyOf.cache = {};

module.exports = { multiplyOf };
