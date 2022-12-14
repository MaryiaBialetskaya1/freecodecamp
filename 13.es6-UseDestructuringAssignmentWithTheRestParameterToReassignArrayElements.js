//es6-UseDestructuringAssignmentWithTheRestParameterToReassignArrayElements.js

// Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a,b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);