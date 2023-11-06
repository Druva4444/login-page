let ele = document.querySelector(".but3");
ele.addEventListener("click",fun);
function fun(){
    let block = document.querySelector(".change");
    block.style.transform = "translateX(100%)";
    document.getElementById("p1").innerHTML="not an user please sign up"
    document.getElementById("p2").innerHTML=""
    block.style.borderRadius="100px 30px 30px 100px"
    let but = document.querySelector(".but4");
    but.style.display = "block";
    ele.style.display="none";
}
let ele1= document.querySelector(".but4");
ele1.addEventListener("click",fun1);
function fun1(){
    let block = document.querySelector(".change");
    block.style.transform = "translateX(0px)";
    block.style.borderRadius="30px 100px 100px 30px"
    let but = document.querySelector(".but3");
    but.style.display = "block";
    ele1.style.display="none";
}