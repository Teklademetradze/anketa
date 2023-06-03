// var fullname = "beka baghaturia"
// var mynumber = 635
// var x = parseInt(prompt("enter car name"))
// //console.log(x)
// console.log(mynumber,fullname)
// console.log(typeof(mynumber))
// var x1 = Number(prompt())
// var x2 = Number(prompt())
// if(x1>x2){
//     console.log("x1 is bigger")
// }
// if(x2>x1){
//     console.log("x2 is bigger")
// }
// // else if(x1==x2){
// //     console.log("x1 = x2")
// // }
// else{
//     console.log("x1 = x2")
// }
// console.log(x1>x2)
// console.log(x1<x2)

// var age = parseInt(prompt("enter your age"))
// if(age >0 && age <18){
//     console.log("teenager")
// }
// else if(age>17 && age < 60){
//     console.log("adult")
// } 
// else if(age>=60){
//     console.log("pensioner")
// }
// else{
//     console.log("incorect input")
// }
// x = Number(prompt())

// console.log("===============")
// if(x==5){
// for(var i = 0; i < 10; i++){
//     console.log("hello world",i)
// } 
// }
// else{
//     for(var i = 0; i < 20; i+=2){
//         console.log("hello world",i)
//     } 
// }
// for(var i = 100; i > -100; i-=3){
//     console.log(i)
// }
// var x = 20
// if(x%2==0){
//     console.log("even")
// }
// else if(x%2==1){
//     console.log("odd")
// }
// var arr = [56,76,0,7,12,65, "1 - beka baghaturia"]
// console.log(arr[3]+arr[1])
// console.log(arr[arr.length-1])

// var word = prompt()
// if(word[0]=="a" || word[0]=="e" || word[0]=="i" || word[0]=="o" || word[0]=="u"){
//     console.log("xmovani")
// }
// else{
//     console.log("tanxmovani")
// }

//arr = [45,87,123,8797,153,56,96,35,74,34,9543,2]
//9543 87 123 8797 153,56,96,35,74,34,9543
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]*2)
// }

// arr = []
// for(var i = 0; i < 10; i++){
//     var x =parseInt(prompt())
//     //arr[i] = x
//     arr.push(x)
// }
// console.log(arr)

// var z = prompt()
// console.log(z.split(","))

// for(var i = 0; i < arr.length; i++){
//     if(arr[i]%2==0){
//         console.log(arr[i])
        
//     }
// }

// 100 -100

// console.log(arr[i])
// for(var i = -20; i < 5; i+=5){
// var x = prompt()
// }

// var x = arr[0]
// var y = arr[arr.length-1]
// if(arr.length%2==0){
// for(var i = 0; i < arr.length/2; i++){
//     if(x<arr[i]){
//         x = arr[i]
//     }
// }
// for(var i = arr.length/2; i < arr.length; i++){
//     if(y<arr[i]){
//         y = arr[i]
//     }
// }
// }
// else{
// for(var i = 0; i < arr.length/2-0.5; i++){
//     if(x<arr[i]){
//         x = arr[i]
//     }
// }
// for(var i = arr.length/2+0.5; i < arr.length; i++){
//     if(y<arr[i]){
//         y = arr[i]
//     }
// }
// }
//console.log(x,y)
// var x = 0
// var y = 0
// if(arr.length%2==0){
// for(var i = 0; i < arr.length/2; i++){
//    x = x + arr[i]
// }
// for(var i = arr.length/2; i < arr.length; i++){
//    y = y + arr[i]
// }
// }
// else{
// for(var i = 0; i < arr.length/2-0.5; i++){
//     x = x + arr[i]
// }
// for(var i = arr.length/2+0.5; i < arr.length; i++){
//     y = y + arr[i]
// }
// }

// var z = 0
// for(var i of arr){
//     z = z + i
// }

// arr.foreach(i=>{
//     z = z + i
// })

// var q = arr[0];
// var w = arr[0];
// for(var i of arr){
//     if(i%2 == 0 && i > q){
//         q = i
//     }
//     else if(i%2==1 && i > w ){
//         w = i
//     }
// }

// console.log(w,q)
// console.log(Math.abs(q-w))


// name1 = "beka"
// name2 = "gio"
//kodis pragmenti
//print(name1,name2)
//shedegi:gio beka

// function add(x1=50,x2=10,x3=0){
//     return Math.sqrt(x1**2+x2**3+x3**4)
// }

// console.log(add(5,10,5))
// console.log(add(40,50,23))
// console.log(add(10,43,1))
// var z1 = add(10,20,30)
// console.log(z1)
// if(z1%2==0){
//     console.log("aa")
// }
// else{
//     console.log("b")
// }
// var z =parseInt(prompt())
// add(z,z,z)


// function xz(x){
//     var x1 = x.split(" ")
//     var newarr = []
//     for(var i of x1){
//       newarr.push(parseInt(i))
//         }
//     var result = 0
//     for(var i of newarr){
//         result= result + i
//     }
//     return result
// }

// x1 = prompt()
// x2 = prompt()
// x3 = prompt()

// console.log(xz(x1))
// console.log(xz(x2))
// console.log(xz(x3))



// console.log(newarr)

// var r = add(10,20,0)
// if(r > 500){
// console.log("aaa")
// }
// else{
//     console.log("bb")
// }
//var x = parseInt(Math.random()*50)
// var arr = []
// for(var i = 0; i <10; i++){
// //arr[i]=parseInt(Math.random()*50)
// arr.push(parseInt(Math.random()*50))
// }
// console.log(arr)

// function randarr(count,min,max){
//     arr = []
//     for(var i = 0; i < count; i++){
//        arr.push(parseInt(Math.random()*(max - min)+min))
//     } 
//     return arr
// }
// var newarr = randarr(10,30,50)
// newarr.push(100)
// console.log(newarr)

// var x ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// function generateString(strLength, strCount) {
//     // var arr = []
//     for(var y = 0; y<strCount; y++){
//     var word = "";
//     var xmovani = 0;
//     var tanxmovani = 0;
//     for ( var i = 0; i < strLength; i++ ) {
//         word += x[Math.floor(Math.random() * x.length)];
//     }
//     // arr[y] = word
//     //arr.push(word)
//     for(var j of word.toLowerCase()){
//         if(j=="a" || j=="e" || j=="i" || j=="o" || j=="u"){
//             xmovani++
//         }
//         else{
//             tanxmovani++
//         }
//     }
//     console.log(word,tanxmovani,xmovani)

// }
//     // return(arr)
// }






// generateString(5, 3);
// generateString(15, 3);
// generateString(25, 3);
//var myh1 = document.getElementById("h1id")
// var myh1 = document.getElementsByClassName("head")
// var myh1 = document.getElementsByTagName("h1")
// var myh1 = document.querySelector(".head")
// var myh1 = document.querySelector("#h1id")
// var myh1 = document.querySelector("h1")
//var myh1 = document.querySelector("#head")
// myh1.style.color = "red"
// myh1.innerText = "beka"

// var inp = document.querySelector(".inp")

// function x(){
//    console.log(inp.value)
// }

// var inp = document.querySelector("#inp")

//var arr = ["leqso", "luka", "gio", "guga","gigi"]

// function save(){
//     for(var i of arr){
//         if(inp.value == i.slice(0,2)){
//             head.innerText += " " + i
//             head.style.color = "red"
//         }
//     }
// }
// function x(){
//     var arr = []
//     for(let i = 0; i < 10; i++){
//        arr[i]=(parseInt(Math.random()*100))
//     }
//     console.log(arr,arr.filter(i=> i > 50))
// }
// x()
// x()
// x()

// var inp = document.querySelector("#inp")
// inp.addEventListener("keyup",function(e){
//     myh1.innerText = "" 
//     for(var i of arr){
//         if(i.startsWith(inp.value) && inp.value !=""){
//             myh1.innerText += " " +i 
//         }
//     }
// })

// var arr = ["beka","nika","mari","ana"]
// console.log(arr.filter(i=> i.length>3).join(" "))

// window.addEventListener("scroll",function(){
//     console.log("aaa")
// })

// var obj = {
//     fname:"Wayne",
//     lname:"Rooney",
//     age:35,
//     club:"Manchester United"
// }
// var obj1 = {
//     fname:"Cristiano",
//     lname:"Ronaldo",
//     age:36,
//     club:"Real Madrid"
// }
// var arr = [obj1, obj]
// for(var i of arr){
//     console.log(i.fname,i.lname)
// }

// var but = document.querySelector(".but")
// function hello(){
//     console.log("hello world")
//     console.log(this.innerText)
// }

// but.addEventListener("click",function(){
//     console.log("hello world")
//     console.log(this.innerText)
// })

// but.addEventListener("click",hello)

// but.addEventListener("click",()=>{
//     console.log("hello world")
//     console.log(this)
// })

var alphabet  = "abcdefAghiEjklImnopqOrstuvUwxyz"
var arr = []
for(var i = 0; i < 10; i++) {
    var tmp = ""
    for(var j = 0; j < 30; j++) {
        var random = parseInt(Math.random()*alphabet.length)
        tmp += alphabet[random]
    }
    arr.push(tmp)
}
//console.log(arr)
var objarr = []
var area = document.querySelector(".area")
//console.log(parseInt(Math.random()*alphabet.length), alphabet[parseInt(Math.random()*alphabet.length)])
for(var i of arr){
    var xmovani = 0
    var tanxmovani = 0
    for(var j of i.toLowerCase()){
      if(j=="a" || j=="e" || j=="i" || j=="o" || j=="u"){
          xmovani++
      }
      else{
          tanxmovani++
      }
    }
    var tmpobj = {
        word:i,
        xmovn:xmovani,
        tanx:tanxmovani,
    }
    objarr.push(tmpobj)


    var myword = document.createElement("h1")
    myword.innerText = i
    if(xmovani >= tanxmovani){
        myword.style.color = "red"
    }
    else{
        myword.style.color = "blue"
    }

    area.appendChild(myword)
}


var tb = document.querySelector(".tb")
for(var i of objarr){
    var tmp = `
    <tr class="row">
    <td>${i.word}</td>
    <td>${i.xmovn}</td>
    <td>${i.tanx}</td>
</tr>
    `
    tb.innerHTML += tmp
}
var rows = document.querySelectorAll(".row")
for(var i = 0; i < rows.length; i++){
    if(objarr[i].tanx / objarr[i].xmovn < 2){
        rows[i].classList.add("red")
    }
    else{
        rows[i].classList.add("blue")
    }
}





// var arr1 = objarr.sort(function(a,b){return a.tanx - b.tanx});
// var arr2 = [].concat(arr1).reverse()
// //var arr2 = [].concat(arr1).sort(function(a,b){return b.tanx - a.tanx});
// console.log(arr1,arr2)

