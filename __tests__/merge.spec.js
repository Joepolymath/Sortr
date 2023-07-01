const sortr = require('../dist/index.cjs');

test('merge sort should sort given array and return sorted array', () => {
  expect(sortr.merge.sort([5, 2, 6, 4])).toStrictEqual([2, 4, 5, 6]);
});
