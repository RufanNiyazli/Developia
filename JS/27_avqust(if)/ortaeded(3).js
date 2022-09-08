let num = prompt("vergulle ayrilmis uc ikireqemli eded daxil edin")

num = num.split(",")
num[0] = +num[0]
num[1] = +num[1]
num[2] = +num[2]


if(!(num[0] > 9 && num[0] <100) || !(num[1] >9 && num[1] <100) || !(num[2] >9 && num[2] <100)){
    console.log("Ikireqemli eded yazin")
}
else if((num[0] < num[1] && num[1] < num[2]) || (num[2] < num[1] && num[1] < num[0])){
    console.log(num[1]+" - orta ededdir")
}
else if((num[1] < num[0] && num[0] < num[2]) || (num[2] < num[0] && num[0] < num[1])){
    console.log(num[0]+" - orta ededdir")
}
else if ((num[1] < num[2] && num[2] < num[0]) || (num[0] < num [2] && num[2] < num[1])){
    console.log(num[2]+" - orta ededdir")
}
else {
    console.log("eyni eded daxil etmisiz")
}