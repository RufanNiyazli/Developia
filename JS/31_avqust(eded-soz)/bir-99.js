let a = "bir,iki,üç,dörd,beş,altı,yeddi,səkkiz,doqquz";
a = a.split(",");
let b = "on,iyirmi,otuz,qırx,əlli,altmış,yetmiş,səksən,doxsan";
b = b.split(",");
let c = prompt("eded daxil et");
function NumbertoText() {
  if (/[a-z]/i.test(c)) {
    console.log("eded daxil edin");
  } else if (c >99) {
    console.log("1 den 99 qeder eded daxil edin");
  } else if (c.charAt(1) == "0") {
    console.log(b[c[0] - 1]);
  } else if (c.length == 2) {
    console.log(b[c[0] - 1] + " " + a[c[1] - 1]);
  } else {
    console.log(a[c[0] - 1]);
  }
}
NumbertoText();
