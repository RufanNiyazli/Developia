let username =prompt("Ad ve soyadiniz")
username = username.split(" ")

console.log(username[0].substring(0,1) + " " + username[1].substring(0,1))

username = username[1]+ " " + username[0]
console.log(username)



