let date = prompt("Tarix daxil edin.YYYY.MM.DD -seklinde");
date = date.split(",");
switch (date[1]) {
  case "01":
    console.log(date[2] + " yanvar " + date[0] + " il");
    break;
  case "02":
    console.log(date[2] + " fevral " + date[0] + " il");
    break;
  case "03":
    console.log(date[2] + " mart " + date[0] + " il");
    break;
  case "04":
    console.log(date[2] + " aprel " + date[0] + " il");
    break;
  case "05":
    console.log(date[2] + " may " + date[0] + " il");
    break;
  case "06":
    console.log(date[2] + " iyun " + date[0] + " il");
    break;
  case "07":
    console.log(date[2] + " iyul " + date[0] + " il");
    break;
  case "08":
    console.log(date[2] + " avqust " + date[0] + " il");
    break;
  case "09":
    console.log(date[2] + " sentyabr " + date[0] + " il");
    break;
  case "10":
    console.log(date[2] + " oktyabr " + date[0] + " il");
    break;
  case "11":
    console.log(date[2] + " noyabr " + date[0] + " il");
    break;
  case "12":
    console.log(date[2] + " dekabr " + date[0] + " il");
    break;

  default:
    console.log("Yanlis deyer yazilib");
    break;
}
