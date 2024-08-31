let num1=Math.floor(Math.random()*6 +  1);

let num2=Math.floor(Math.random()*6 +  1);
let p1="images/dice"+num1+".png";
let p2="images/dice"+num2+".png";

let s=document.querySelectorAll("img")[0];
let r=document.querySelectorAll("img")[1];
s.setAttribute("src",p1);
r.setAttribute("src",p2);

if (num1>num2){
    let q=document.querySelector("h1");
    q.innerHTML="player 1 win!"
}
else if(num1<num2){
    let q=document.querySelector("h1");
    q.innerHTML="player 2 win!"
}
else{
    let q=document.querySelector("h1");
    q.innerHTML="DRAW!"
}