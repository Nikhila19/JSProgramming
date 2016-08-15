
//simulates an Ajax call which calls the callback 
// after a random number of milliseconds. This is 
// similar to the real world ajax requests whose 
// return orders are not predictable
function simulateAjax(req, cb) {
  ran = (Math.random() * 10000) % 5000
  console.log("Requesting.... " + req + " after " + ran);
  setTimeout(cb, ran);
}

function getFile(file) {
  return new Promise(function(resolve) {
    simulateAjax(file, resolve);
  });
}

//calls getFile in parallel for file1 - file3
var p1 = getFile('file1');
var p2 = getFile('file2');
var p3 = getFile('file3');

// synchronizes the returns of the Ajax call with Promises
p1.then(function() { console.log('file1 done'); })
.then(function() { return p2; })
.then(function() { console.log('file2 done'); })
.then(function() { return p3; })
.then(function() { console.log('file3 done'); })
.then(function() { console.log('Completed'); })

