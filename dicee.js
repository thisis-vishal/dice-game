var randomNumber1=Math.floor(Math.random()*6)+1;
var url1 = "images/dice" + randomNumber1 + ".png";
var imgs1=document.getElementsByClassName("img1")[0];
imgs1.src=url1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var url2 = "images/dice" + randomNumber2 + ".png";
var imgs2=document.getElementsByClassName("img2")[0];
imgs2.src=url2;
if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wons";
}else {
  document.querySelector("h1").innerHTML="Player 2 Wons";
}
