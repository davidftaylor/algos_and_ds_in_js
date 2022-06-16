/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (arr1, arr2) => {
  if (!arr2.length) return arr1;

  let newArr = [];

  while (arr1.length && arr2.length) {
    let arr1elem = arr1[0];
    let arr2elem = arr2[0];

    if (arr1elem < arr2elem) {
      newArr.push(arr1elem);
      arr1.shift();
      // newArr.push(arr1.shift());
    } else {
      newArr.push(arr2elem);
      arr2.shift();
      //newArr.push(arr2.shift());
    }
  }

  if (!arr1.length) {
    newArr = newArr.concat(arr2);
  } else {
    newArr = newArr.concat(arr1);
  }

  return newArr;

  // return newArr.concat(arr1, arr2);
};

const mergeSort = (nums) => {
  if (nums.length < 2) return nums;
  let arr1 = nums.slice(0, Math.floor(nums.length / 2));
  let arr2 = nums.slice(Math.floor(nums.length / 2));
  return merge(mergeSort(arr1), mergeSort(arr2));
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  //console.log(ans);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
