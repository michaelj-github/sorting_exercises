function merge(arrayOne, arrayTwo) {
  const returnArray = [];
  let i = 0;
  let j = 0;
  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
      returnArray.push(arrayOne[i]);
      i++;
    } else {
      returnArray.push(arrayTwo[j]);
      j++;
    }
  }
  while (i < arrayOne.length) {
    returnArray.push(arrayOne[i]);
    i++;
  }
  while (j < arrayTwo.length) {
    returnArray.push(arrayTwo[j]);
    j++;
  }

  return returnArray;
}

function mergeSort(anArray) {
  if (anArray.length <= 1) return anArray;
  const midPoint = Math.floor(anArray.length / 2);
  const leftSide = mergeSort(anArray.slice(0, midPoint));
  const rightSide = mergeSort(anArray.slice(midPoint));
  return merge(leftSide, rightSide);
}

module.exports = { merge, mergeSort };
