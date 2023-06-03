localStorage.clear();
var inp = document.querySelectorAll(".inp")
var save = document.querySelector(".save")
var arr = JSON.parse(localStorage.getItem("result")) || []
save.addEventListener("click",function(){
    for(var y of inp){
        arr.push(y.value)
    }
        localStorage.setItem("result",JSON.stringify(arr))
})