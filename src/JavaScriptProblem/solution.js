function Solution(array) {
  var totalsum = array[0],
    minimum = array[0],
    maximum = array[0];

  for (let i = 1; i < array.length; i++) {
    totalsum = totalsum + array[i];
    if (minimum > array[i]) minimum = array[i];
    if (maximum < array[i]) maximum = array[i];
  }

  return [totalsum - maximum, totalsum - minimum];
}

console.log(Solution([2, 4, 6, 8, 9]));

// Put above function in google console or node js command promt to get the output
