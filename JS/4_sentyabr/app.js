const isvalidnumber = (num) => {
  return num.length == 12 && num.substring(0, 2) == "+7" ? true : false;
};
console.log(isvalidnumber("+71234567890"));

const numcounter = (a) => {
  return a.replace(/[^a-z]/gi, "").length;
};
console.log(numcounter("bu gun ders yoxdu"));

function capitalize(str) {
  str = str.split(" ");
  str =
    str[0].charAt(0).toUpperCase() +
    str[0].slice(1) +
    " " +
    str[1].charAt(0).toUpperCase() +
    str[1].slice(1) +
    " " +
    str[2].charAt(0).toUpperCase() +
    str[2].slice(1) +
    " " +
    str[3].charAt(0).toUpperCase() +
    str[3].slice(1);
  console.log(str);
}

capitalize("my name is rufan");
