var myresult = JSON.parse(localStorage.getItem("result"))
var res = document.querySelector(".res")
    var tb2 = document.querySelector(".tb2")
    for(var i of myresult){
    res.innerHTML+=" --"+i
    }