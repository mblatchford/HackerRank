function sockMerchant(n, ar) {
  let totalPairs = 0;
  // order the array
  ar.sort();

  let i = 0;
  while (i != n) {
    // value to search for
    let curValue = ar[i];
    // last index value found
    let lastValue = ar.lastIndexOf(curValue);
    // difference is number of instances of that value
    let numOfType = (lastValue - i) + 1;
    // if even number divide by 2 for pairs of that value
    if (numOfType % 2 == 0) {
      totalPairs += numOfType / 2
    } else {
      // odd number of socks, subtract one and divide
      totalPairs += (numOfType - 1) / 2
    }
    // move up index to next value type 
    i = lastValue + 1;
  }
  return totalPairs;
}