// for in and for of loops in arrays
const arr = ["apple", "boy"];

for (let i in arr) {
  console.log(i);
}

for (let i of arr) {
  console.log(i);
}

// Only for in loop in object
const obj = {
  a: "apple",
  b: "boy",
};

for (let i in obj) {
  console.log(i);
}

// iterate over string
const str = "Krishna";
for (let c of str) {
  console.log(c);
}
// or
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
