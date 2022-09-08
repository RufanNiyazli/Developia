let a = prompt("boleni daxil edin");
let b = 99;
let c = 0
while (b < 1000) {
  b++
  if (b % a ==0) {
    c= b +c
  }
}
console.log(c)
