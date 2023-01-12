("use strict");

// const h1  = document.querySelector("h1")

// console.log(h1)

// const arr = new Array(6);
// const arr1 = new Array(1, 2, 3, 4, 5)
// const arr3 = [1, 2, 3, 4, 5]
// console.log(arr3);
// arr3[10] = 9
// console.log(arr3)

// // loop

// for(let i = 0; i <arr3.length; i++){
//     console.log(arr3[i])
// }

// for(let num of arr3){
//     console.log(num)
// }

// const obj = {
//     name: "Surulere",
//     age: 24
// };

// for(let o of Object.values(obj)){
//     console.log(obj[o])
// }

// const concatenatedArray = arr2.concat(arr1)

// const arr = [2, 3, -4, -8, -9, 4, 7, 8, 1]

// console.log(arr.splice(1, 3));
// console.log(arr);

// console.log(arr.some((a) => a > 0));
// // console.log(arr.some(function(a){ a > 0}));

// //  map, filter, reduce, find, findIndex, flat, flatMap
// // map
// const mappedArray = arr.map(
//     (value, index, array) => `value - ${value}, index - ${index}`);
// console.log(mappedArray);

// const transformArray = arr.filter((value) => value > 0 );
// // .filter((value) => value !== false);
// console.log(transformArray);

// // let total = 0;
// // for(let num of arr) total += num;
// // console.log(total)

// // const arr = [2, 3, -4, -8, -9, 4, 7, 8, 1]
// const sum = arr.reduce((accumulator, value) => {
//     console.log(accumulator, value)
//     return accumulator + value
// });

// console.log(sum);

// const fruits = ['cucumber', 'banana', 'pineapple', 'waterMelon', 'pawpaw', 'pear', 'orange'];
// fruits.reduce((acc, value) => acc.length > value.length ? acc : value);
// console.log(fruits);

// const person = [
//     {name: "Emmanuel Olaifa",
//     project: "Water insecurity",
//     resoureces: ["water"],
// },
// {name: "Alake Hadiza",
// project: "Road Transportation",
// resoureces: ["danfo", "conductor", "driver", "agbero"],
// },
// {name: "Victor Vendor OG",
// project: "Newspaper",
// resoureces: ["paper", "pafun, pafun"],
// },
// ];

// const resoureces = people.map(item => item.resoureces).flat()
// const resourecesFlatMap = poeple.flatMap(item => item.resoureces)
// console.log(resourecesFlatMap);


const fruits =
 ["cucumber",
  "banana", 
  "pineapple", 
  "waterMelon", 
  "pawpaw", 
  "pear", 
  "orange"];

  const arr = [1, -102, 5, 23, -89, -12, 9];
  console.log(fruits);
  console.log(arr);
  fruits.sort();
  arr.sort((a, b) => a - b);
  console.log(fruits);
  console.log(arr);

//   const filledArray = new Array(10).fill(1)
//   console.log(fillArray);

// const h1s = document.querySelectorAll("h1")
// console.log(h1s);

const k1 = Array.from({length: 10}, (_, k) => k + 1);
console.log(k1);

navigator.app



