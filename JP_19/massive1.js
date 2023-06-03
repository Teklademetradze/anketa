// var arr = [67,90,38,192,938]
// var arr2 = []
//     for (var i = arr.length - 1; i >= 0; i--){
//         arr2.push(arr[i])
//     }
// console.log(arr2)



// function x(arr){
//     var vowels = ["a","e","i","o","u"]
//     var consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
//     for(var i of arr){  
//     var y = 0
//     var x = 0
//         for(var k of i){
//         for(var z of vowels){
//         if(k.includes(z)){
//             y++
//         } 
//     }
//     for(var b of consonant){
//         if(k.includes(b)){
//             x++
//     } 
//     }
// }
// if(x==y){
//     console.log(k)
// }
//     }
// }
// x([["my"],
//     ["name"],
//     ["is"],
//     ["tekla"]])







// var str = "ana"
// var str2 = []
//    for (var i = str.length - 1; i >= 0; i--){
//        str2.push(str[i])
//        var k = str2.join("")
//       }
//       if(k==str){
//           console.log(str)
//       }
    




// var div  = document.querySelectorAll(".div");
// var res  = document.querySelector(".res");
// for(var x of div){
// x.addEventListener("click",function(){
//     var colors = ["pink","yellow","black","gray","blue","purple","green","brown","lightblue","canary","orange"];
//     for(var i of div){
//     var k = colors[parseInt(Math.random() * colors.length)];
//     i.style.backgroundColor = k;
// }
// })
// }
// res.addEventListener("click",function(){
//     for(var k of div){
//     k.style.backgroundColor = "red"
//     }
// })



// var div  = document.querySelectorAll(".div");
// var res  = document.querySelector(".res");
// var change  = document.querySelector(".change");
// for(var x of div){
// x.addEventListener("click",function(){
//     var colors = ["pink","yellow","black","gray","blue","purple","green","brown","lightblue","canary","orange"];
//     var k = colors[parseInt(Math.random() * colors.length)];
//     this.style.backgroundColor = k;
// })
// }

// change.addEventListener("click",function(){
//         var colors = ["pink","yellow","black","gray","blue","purple","green","brown","lightblue","canary","orange"];
//         var k = colors[parseInt(Math.random() * colors.length)];
//         for(var i of div){
    
//     i.style.backgroundColor = k;
// }
// })





// var div  = document.querySelectorAll(".div");
// var res  = document.querySelector(".res");

// var res  = document.querySelector(".res");
// var change2  = document.querySelectorAll(".change");
// var i = 0;

//     function change(){
        
//             var doc = document.querySelectorAll(".div");
//             var color = ["pink","yellow","hotpink","blue","purple","lightgreen","lightblue","canary","orange"];
//     for(var x of doc){
//         x.style.backgroundColor = color[i];
//         i = (i + 1) % color.length;
//     }
// setInterval(change,500)
// }
// function change4(){
        
//     var doc = document.querySelectorAll(".div");
//     var color = ["pink","yellow","hotpink","blue","purple","lightgreen","lightblue","canary","orange"];
// for(var x of doc){
// x.style.backgroundColor = color[i];
// i = (i + 1) % color.length;
// }
// setInterval(change4,1000)
// }
// function change3(){
        
//     var doc = document.querySelectorAll(".div");
//     var color = ["pink","yellow","hotpink","blue","purple","lightgreen","lightblue","canary","orange"];
// for(var x of doc){
// x.style.backgroundColor = color[i];
// i = (i + 1) % color.length;
// }
// setInterval(change3,2000)
// }
// res.addEventListener("click",function(){
//     for(var k of div){
//     k.style.backgroundColor = "red"
//     }
// })







// class car{
//     constructor(manufacturer,model,year){
//         this.manufacturer = manufacturer,
//         this.model=model,
//         this.year = year
// }
// maxSpeed(){
// return parseInt(Math.random()*50+250)
// }
// }
// var car1 = new car("bmw","f90",2020)
// var car2 = new car("bmw","f30",2016)
// var car3 = new car("bmw","f60",2008)
// var arr = [car1,car2,car3]
// for(var i of arr){
//     console.log(i.maxSpeed(),i.manufacturer,i.model,i.year)
// for (var y = 0; y < arr.length; y++){
//     for(var k = 0; k<arr.length-1;k++){
//         var x = arr[k+1].year
//         if(arr[k+1].year>arr[k+2].year){
//             arr[k+1].year = arr[k+2].year
//             arr[k+1].year = x
//         }
//     }
// }
// console.log(arr)
// }



class Car{
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model,
        this.year = year
    }
}
var car1 = new Car("BMW", "f80", 2019)
var car2 = new Car("BMW", "f40", 2012)
var car3 = new Car("BMW", "e60", 2009)
var car4 = new Car("BMW", "e90", 2001)
var car5 = new Car("BMW", "f90", 2022)
var arr = [car1, car2, car3, car4, car5]
var sort = arr.sort((a,b) => a.year-b.year)
for(var i of sort){
    var k = 2022-i.year
}