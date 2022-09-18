let num = prompt("eded daxile et");
while (0 < num) {
    let i = 1
    let  count = 0
    while (i <= num) {
        if (num % i ==0) {
            count++
        }
        i++
    }
    if (count==2 /*count>2*/ ) {
        console.log( num);
    }
    num--

}
//komputer ekraninda