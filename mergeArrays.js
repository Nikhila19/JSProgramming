// Merging 2 sorted arrays
Array.prototype.merge = function mergeArray(arr) {
  var arr1 = this;
  var arr2 = arr;
  var finalLen = arr1.length + arr2.length;
  var finalArr = []

  for (var i=0, ptr1 = 0, ptr2 = 0; i < finalLen; i++) {
    ele1 = arr1[ptr1];
    ele2 = arr2[ptr2];

    if (ptr1 < arr1.length) {
      if (ptr2 < arr2.length) {
        if (ele1 <= ele2) { 
          minElem = ele1;
          ptr1 = ptr1 +1; 
        } else { 
          minElem = ele2; 
          ptr2 = ptr2+1;
        }
      } else { //arr2 is done
          minElem = ele1;
          ptr1 = ptr1 +1;         
      }
    } else { //arr1 is done
      minElem = ele2; 
      ptr2 = ptr2+1;
    }
    finalArr.push(minElem);

    console.log("final= "+ finalArr);
  }
  return finalArr;
}