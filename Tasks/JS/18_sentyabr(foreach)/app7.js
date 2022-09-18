const name =["Micahel","trevor","franklin","lamar"]
function callback(num) {
    console.log("<3<3<3<3" + num + "<3<3<3<3")
}
function index(num,index) {
    console.log(index +" - "+ num )
}
name.forEach(callback)
name.forEach(index)

let word = prompt("Kebab_Case formatinda yazin")
word = word.split("-")



let newWord = word.map(num=>{
    return num.toUpperCase()
})
console.log(newWord.join("_"))