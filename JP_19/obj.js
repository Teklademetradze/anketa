// var car1 = {
//     name: "BMW iX M60",
//     price: 111905,
// }
// var car2 = {
//     name: "BMW i4",
//     price: 51905,
// }
// var car3 = {
//     name: "BMW iX",
//     price: 69905,
// }
// var car4 = {
//     name: "BMW i3",
//     price: 33805,
// }
// var car5 = {
//     name: "BMW iX3",
//     price: 60970,
// }
// var car6 = {
//     name: "GLA SUV",
//     price: 36400,
// }
// var car7 = {
//     name: "GLB SUV",
//     price: 38600,
// }
// var car8 = {
//     name: "GLC SUV",
//     price: 43850,
// }
// var car9 = {
//     name: "GLC Coupe",
//     price: 52500,
// }
// var car10 = {
//     name: "GLE SUV",
//     price: 56150,
// }
// var arr = [car1,car2,car3,car4,car5]
// var x = [0]
// for(i of arr){
//     if(x < i.price){
//         x = i.price;
//     }
// }
// console.log("BMW",x)
// var arr2 = [car6,car7,car8,car9,car10]
// var y = [0]
// for(z of arr2){
//     if(y < z.price){
//         y = z.price;
//     }
// }
// console.log("Mercedes",y)





// var obj = {
//     fname:"BMW",
//     year: 1916,
// }
// var obj1 = {
//     fname:"tesla",
//     year: 2003,
// }
// var obj2 = {
//     fname:"Nissan Leaf",
//     year:  2011,
// }
// var obj3 = {
//     fname:"Toyota Sequoia",
//        year: 2012,
// }
// var obj4 = {
//     fname:"Lexus RX",
//     year: 2010,
// }
// var arr = [obj1.year, obj.year, obj2.year,obj3.year,obj4.year]
// for (var y = 0; y < arr.length; y++){
//     for(var i = 0; i<arr.length;i++){
//         var x = arr[i]
//         if(arr[i]>arr[i+1]){
//             arr[i] = arr[i+1]
//             arr[i+1] = x
//         }
//     }
// }
// console.log(arr)




// var fname = document.querySelector(".fname")
// var lname = document.querySelector(".lname")
// var age = document.querySelector(".age")
// var save = document.querySelector(".save")
// var arr = []
// save.addEventListener("click",function(){
//     var obj = {
//         saxeli:fname.value,
//         gvari:lname.value,
//         asaki:age.value
//     }
//     arr.push(obj)
//     for (var y = 0; y < arr.length; y++){
//         for(var i = 0; i<arr.length;i++){
//             var x = arr[i].asaki
//             if(arr[i]>arr[i+1]){
//                 arr[i]= arr[i+1]
//                 arr[i+1] = x
//             }
//         }
//     }
//     console.log(arr)
// //  console.log(arr) 
// })






var fname = document.querySelector(".fname")
var lname = document.querySelector(".lname")
var kurse = document.querySelector(".age")
var save = document.querySelector(".save")
var tb = document.querySelector(".tb")
var tb2 = document.querySelector(".tb2")
var arr = []
var arr2 = []
save.addEventListener("click",function(){
    tb.innerHTML = ""
    tb2.innerHTML = ""
    tb.innerHTML = `
    <tr>    
    <th>Firtname</th>    
    <th>Lastname</th>    
    <th>kurse</th>
    </tr>    `     
    tb2.innerHTML = `
    <tr>    
    <th>Firtname</th>    
    <th>Lastname</th>    
    <th>kurse</th>
    </tr>    `     
    var obj = {
        saxeli:fname.value,
        gvari:lname.value,
        kursi: sel.value, 
    }
    arr.push(obj)
    console.log(arr)
    for(var i of arr){
        if(i.kursi==1){
        var tmp =`       
         <tr>        
         <td>${i.saxeli}</td>        
         <td>${i.gvari}</td>        
         <td>${i.kursi}</td>     
         </tr>        `        
        tb.innerHTML += tmp
        }
        if(i.kursi==2){
            var p2 =`       
         <tr>        
         <td>${i.saxeli}</td>        
         <td>${i.gvari}</td>        
         <td>${i.kursi}</td>      
         </tr>        `        
        tb2.innerHTML += p2
        }
    }
   
})

