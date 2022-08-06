function bubbleSort(anArray) {
  for (let i = 0; i < anArray.length; i++) {
    let swapped = false;
    for (let j = 0; j < anArray.length - i; j++) {
      if (anArray[j] > anArray[j + 1]) {
        [anArray[j], anArray[j + 1]] = [anArray[j + 1], anArray[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return anArray;
}

module.exports = bubbleSort;
