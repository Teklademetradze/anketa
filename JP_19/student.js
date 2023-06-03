var tb1 = document.querySelector(".tb1")
var tb2 = document.querySelector(".tb2")
var fname = document.querySelector(".fname")
var lname = document.querySelector(".lname")
var course = document.querySelector(".course")
var save = document.querySelector(".save")
var card = document.querySelector(".card")
var arr = []
save.addEventListener("click",function(){
    var obj = {
        saxeli:fname.value,
        gvari:lname.value,
        kursi:course.value,
        qula:parseInt(Math.random()*100),
        result: [ ]
    }
    arr.push(obj)
    var sortedarr = arr.sort(function(a,b){
        return b.qula - a.qula
    })
    var cardtmp = `
    <h1>${sortedarr[0].saxeli}</h1>
    <h2>${sortedarr[0].gvari}</h2>
    <p>${sortedarr[0].kursi}</p>
    <p>${sortedarr[0].qula}</p>
    <p>${sortedarr[0].result}</p>
    `
    card.innerHTML = cardtmp
    console.log(sortedarr[0])
    if(obj.qula<50 && obj.kursi==1){
        obj.result.push("failed")
        var tmp3 = `
        <tr>
        <td>${obj.saxeli}</td>
        <td>${obj.gvari}</td>
        <td>${obj.kursi}</td>
        <td>${obj.qula}</td>
        <td>${obj.result}</td>
    </tr>
        `
        tb1.innerHTML += tmp3
    }
    else if(obj.qula>50 && obj.kursi==1){
        obj.result.push("passed")
        var tmp4 = `
        <tr>
        <td>${obj.saxeli}</td>
        <td>${obj.gvari}</td>
        <td>${obj.kursi}</td>
        <td>${obj.qula}</td>
        <td>${obj.result}</td>
    </tr>
        `
        tb1.innerHTML += tmp4 
    }
    if(obj.qula<50 && obj.kursi==2){
        obj.result.push("failed")
        var tmp5 = `
        <tr>
        <td>${obj.saxeli}</td>
        <td>${obj.gvari}</td>
        <td>${obj.kursi}</td>
        <td>${obj.qula}</td>
        <td>${obj.result}</td>
    </tr>
        `
        tb2.innerHTML += tmp5
  }
    else if(obj.qula>50 && obj.kursi==2){
        obj.result.push("passed")
        var tmp6 = `
        <tr>
        <td>${obj.saxeli}</td>
        <td>${obj.gvari}</td>
        <td>${obj.kursi}</td>
        <td>${obj.qula}</td>
        <td>${obj.result}</td>
    </tr>
        `
        tb2.innerHTML += tmp6
    }
})


