// array a given as argument
let a = [1, 2, 3];
// shifts = d on hackerrank
let d = 4
// loop the number of times to shift
for(let i = 0; i < d; i++ ){
  // pops the first element off shifting all other values to the left
  let firstElement = a.shift();
  // pushes element onto back of array
  array1.push(firstElement);
  console.log(array1);
}