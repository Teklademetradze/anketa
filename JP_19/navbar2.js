window.addEventListener("scroll",function(){
    if(window.scrollY>10){
        x.style.display ="none";
        y.style.margin = "0px 0px 0px 0px"
        y.style.height = "100px"
        x.justifyContent="space-between" 
    }
    if(window.scrollY<10){
        x.style.display ="flex";
        y.style.margin = "36px 0px 0px 0px";
        y.style.height = "143px"
        x.justifyContent="space-around" 
    }
})


