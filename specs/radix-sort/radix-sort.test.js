/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function sortIntoBuckets(array, j) {
  // j takes 1 for ones place, 2 for tens, etc.
  let buckets = [];

  for (let i = 0; i < 10; i++) {
    buckets.push([]);
  }

  for (let i = 0; i < array.length; i++) {
    let numToStr = array[i].toString();
    let digitsPlace = numToStr[numToStr.length - j] || 0;
    /* digitsPlace is automatically converted to number
     * when used as key for array */
    buckets[digitsPlace].push(array[i]);
  }

  return buckets.flat();
}

function radixSort(array) {
  let j = 1;
  let maxDigits = Math.max(...array).toString().length;

  while (j <= maxDigits) {
    array = sortIntoBuckets(array, j);
    j++;
  }

  return array;
}

// unit tests
// do not modify the below code
test("radix sort", function () {
  test("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  test("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(
      nums.sort((a, b) => {
        if (a < b) return -1;
        return 1;
      })
    );
  });
});
