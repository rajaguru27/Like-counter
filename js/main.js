var ans=0;

var heart =document.getElementById("hearts");
var para =document.getElementById("para-icon");




heart.addEventListener("click",function(){
 ans++;
 para.innerHTML=ans+"likes";
 para.classList.add("view");
 hearts.style.color ="red";
 para.classList.remove("paras");
})

   
  



