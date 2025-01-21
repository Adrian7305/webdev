// this is string tutorial
// strings are immutable
let a = "ADRIAN";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);


console.log(a.length);

let f="Ronan";

// template lietrals using `

console.log(`his name is ${a} and his friend is ${f}`);

console.log(a.toLowerCase());
console.log(f.toUpperCase());
console.log(a.slice(1,4));
console.log(a.slice(1));
// only first occurance is replaced
console.log(a.replace("AD",77));

// to concat use
console.log(a.concat(a,f));

