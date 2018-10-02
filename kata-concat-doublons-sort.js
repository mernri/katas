arr5 = [1, 3, 5, 7, 9, 11, 12];
arr6 = [1, 2, 3, 4, 5, 10, 12];

function mergeArrays(arr1, arr2) {
  // concatène les 2 tableaux
   var newArray = arr1.concat(arr2);
  // retire les doublons 
    var uniqueArray = newArray.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });
  // sort ordre croissant
  var uniqueArraySorted = uniqueArray.sort(function(a, b){
    return a - b;
  });
  //return result
  return uniqueArraySorted;
};

console.log(mergeArrays(arr5,arr6));