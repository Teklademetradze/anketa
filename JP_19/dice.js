var img = document.querySelector(".img")
var firstplayer = true
var roll = document.querySelector(".roll")
var save = document.querySelector(".save")
var h1 = document.querySelector(".h1")
var h2 = document.querySelector(".h2")
var sc1 = 0
var sc2 = 0
roll.addEventListener("click", function(){
    var rand = parseInt(Math.random()*6)
    img.src = `dice${rand}.png`
    firstplayer==true ? sc1+=rand+1 : sc2+=rand+1
    h1.innerHTML = sc1
    h2.innerHTML = sc2
})
save.addEventListener("click", function(){
    firstplayer = !firstplayer
})