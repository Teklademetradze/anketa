// localStorage.clear()
var tb = document.querySelector(".tb")
var arr = JSON.parse(localStorage.getItem("myuserarr"))
console.log(arr)

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

for(var i of arr){
    var tmp = `
    <tr>
    <td>${i.firstname}</td>
    <td>${i.password}</td>
    <td>${i.time}</td>
</tr>
    `
    tb.innerHTML += tmp
    
}