// tallest candle = largest number
// sort descending

const sorted = ar.sort(function(a, b) {
    return b - a;
  });
//index of last tallest + 1 is num candles
return sorted.lastIndexOf(sorted[0]) + 1;


