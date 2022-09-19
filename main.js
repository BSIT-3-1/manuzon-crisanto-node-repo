console.log("Hello my name is Crisanto")

let x = 5;
let str = ' *';
let txt = ' ';
console.log(`The number is ${x} `)
//to check
function isOddOrEven(numberToCheck) {
const isEven = numberToCheck % 2 == 0;
  
//Even
if (isEven) return console.log(`The number ${numberToCheck} is Even`);
  
//odd
else x = (x + 1);
  console.log(`The number is not even so I add 1 to make it ${ x} and is now even`)
}
isOddOrEven(x);

//upside
for (let i = 1; i <= x; i++) {
  
  for (let j = (x - i); j <= x -i; j++){    console.log(txt.repeat(j),str.repeat(i))
  }
}

//downside
for (let i = 1, k = (x - i); i <= x - 1; i++, k--) {    console.log(txt.repeat(i),str.repeat(k));
}