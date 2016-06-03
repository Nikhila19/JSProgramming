function fibo(fiboLen) {
  var series = [1,1];
  if (fiboLen <= 1 ) { return 1; }
  if (fiboLen == 2) { return series; }
  var seriesLen = series.length;

  for(var i=3; seriesLen < fiboLen; i++) {
    var nextNum = series[seriesLen-1] + series[seriesLen-2];
    series.push(nextNum)
    seriesLen = series.length
  }
  console.log(series);
}
