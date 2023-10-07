var num1=Math.floor(Math.random()*6)+1;
var num2="./dice"+num1+".png";
var num3=document.querySelectorAll("img")[0];
num3.setAttribute("src",num2);


var arr1=Math.floor(Math.random()*6)+1;
var arr2="./dice"+arr1+".png";
var arr3=document.querySelectorAll("img")[1];
arr3.setAttribute("src",arr2);


if(num1>arr1){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if(num1<arr1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}

