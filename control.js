var theme= document.getElementById("theme");
theme.onclick=function(){
 document.body.classList.toggle("darkmode")   
 if(document.body.classList.contains("darkmode")){
    theme.src="img/day.jpg"
    
 }else{
    theme.src="img/night.jpg"
 }
}
