/**
 * Binary search to find a number.
 *
 * @param {number[]} arr sorted
 * @param {number} targetNum number to find
 * @returns Return index of number or Null.
 */

function _bSRecusive(arr, targetNum, startInd, endInd) {
  //4.
  if (startInd > endInd) {
    return null;
  }

  //1. Find mid index, if its right, we return it
  const midInd = Math.floor((startInd + endInd) / 2);

  if (arr[midInd] === targetNum) return midInd;

  // 2. If the value at midInd is les than targetNum, go up
  if (arr[midInd] < targetNum)
    return _bSRecusive(arr, targetNum, midInd + 1, endInd);

  // 3. If the value is greater, go down
  if (arr[midInd] > targetNum)
    return _bSRecusive(arr, targetNum, startInd, midInd - 1);
}

function recursive(arr, targetNum) {
  if (arr.length === 0) return null;
  return _bSRecusive(arr, targetNum, 0, arr.length - 1);
}

module.exports = {
  recursive: recursive,
};
