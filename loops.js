// // a function in js
// const someName = () => {};

// // unnamed arrow function  (simplest function you can get)
// () => {};
// someName();

const numbers = [1,2,3,4,5,6]

// methods on arrays in js (and ruby)
// forEach (each in ruby), map, filter(select in ruby), reduce, find

const logThing = (thing) => {
  console.log(thing);
};

logThing("hello");

// forEach - go through each thing in an array and run the function given,
// returns undefined (in ruby returns the array)
// in js functions can take function as argument
// numbers.forEach(logThing);

// console.log("returnValue:", returnValue);

// numbers.forEach((thing) => {
//   console.log(thing);
// });

numbers.forEach((thing) => {
  if (thing % 2 == 0) {
    console.log("even");
} else {
  console.log("odd");
}
});

// map - go through each thing in an array and run the function given
// what ever that function returns is push through a new array
// which is returned at the end

let newValues = numbers.map((num) => {
 // what ever that is returned here is  push into a new array 
 // ternary way to write it:
// return num % 2 === 0 ? {num: num, val: 'even'} : {num: num, val: 'odd'};
 if  ( num % 2 === 0 ) {
   return { num: num, val: 'even'};
  }
  return {num: num, val: 'odd'};
});

console.log(newValues);

// filter - go through each thing in an array and run the function given
// if that function returns true then keeps that item in the new array
// which is returned at the end

const odds = numbers.filter((num)=>{
  return num % 2 !== 0;
});

console.log(odds);