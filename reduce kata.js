x = [1, 5, 2]

function grow(x){
  x = x.sort();
  var total = x.reduce(function(accumulator, current) {
    return accumulator * current
});
  return total
};
  
  console.log(grow(x));