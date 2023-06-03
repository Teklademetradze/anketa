// var but = document.querySelectorAll(".button")    
// function hello(){
//     console.log(this.innerText)
// }
// for(var i of but){
// i.addEventListener("click",hello)
// }



var button = document.querySelectorAll(".td")
var y = 0
var win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
for(i of button){
i.addEventListener("click",function(){
        if(this.innerText.length==0){
        y++
        if(y%2 == 1){
            this.innerText="X"
        }
        if(y%2 == 0){
            this.innerText="O"
        }
    for (var z of win) {
      if(z.every(w => button[w].innerHTML == "X")) {
        my.innerHTML = "X WON!!!"
        return "x";
      }
      if(z.every(w => button[w].innerHTML == "O")) {
        my.innerHTML = "O WON!!!"
        return "o";
      }
    }
    return "";
}    
    })
}
function res(){
    for(var i of button) {
        i.innerHTML = ''
        my.style.display ="none"
    }
}




