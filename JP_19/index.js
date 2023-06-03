// var x = Number(prompt("start"))
// var y =  Number(prompt("stop"))
// var z =  Number(prompt("interval"))
// if (x<y) {
// for( var i = x; i < y; i+=z){
//     console.log(i)
// }
// }




// var arr = [56,76,0,7,12,65,1,50,80,90]
// if (arr.length%2==1) {
//     console.log(arr[(arr.length-1)/2])
// }
// else{
//     console.log(arr[(arr.length/2)])
//     console.log(arr[(arr.length/2-1)])
// }




// var x = ["g","b","i","k","m"]
// if (x[0] == 'a' || x[0] == 'e' || x[0] == 'i' || x[0] == 'o' || x[0] == 'u' || x[0] == 'A' || x[0] == 'E' || x[0] == 'I' || x[0] == 'O' || x[0] == 'U') {
//     console.log("vowel")
// }
// else if  (x[0] != 'a' || x[0] != 'e' || x[0] != 'i' || x[0] != 'o' || x[0] != 'u' || x[0] != 'A' || x[0] != 'E' || x[0] != 'I' || x[0] != 'O' || x[0] != 'U') {
//     console.log("consonant")
// }






// var x = (prompt())
// if (x[0] == 'a' || x[0] == 'e' || x[0] == 'i' || x[0] == 'o' || x[0] == 'u' || x[0] == 'A' || x[0] == 'E' || x[0] == 'I' || x[0] == 'O' || x[0] == 'U') {
//         console.log("vowel")
//     }
// else if  (x[0] != 'a' || x[0] != 'e' || x[0] != 'i' || x[0] != 'o' || x[0] != 'u' || x[0] != 'A' || x[0] != 'E' || x[0] != 'I' || x[0] != 'O' || x[0] != 'U') {
//     console.log("consonant")
// }






// arr = [45,87,123,8797,153,56,96,35,74,34,9543]
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]*2)
// }






// arr = []
// for(var i = 0; i < 10; i++){
//     var x = prompt()
// }
// console.log(arr)





// var z = prompt()
// console.log(z.split(" "))





// var arr = [700, 20, 55, 68, 231, 551, 233, 432]
// for(var i = 0; i < arr.length; i++){
//     if(arr[i]%2==0){
//         console.log( ("even"),arr[arr.length]);
//     }
// }





// var arr = [700, 20, 55, 68, 231, 551, 233, 432];
// for (var i = arr.length - 1; i > 0; i--) {
//     console.log(arr[i]);
// }






// var arr = [700, 20, 55, 68, 231, 551, 233, 432]
// for(var i = 0; i < arr.length; i++){
//     if(arr[i]%2==1){
//         console.log(arr[i]*arr[i]*arr[i])
//     }
//     else if(arr[i]%2==0){
//         console.log(arr[i]*arr[i])
//     }
// }





//  var arr = [700, 20, 55, 68, 231, 551, 233, 432];
//  var x = [0]
//  for(var i = 0; i < arr.length; i++){
//      if(x < arr[i]){
//          x = arr[i];
//      }
//  }
//  console.log(x)





// var arr = [100, 400, 700, 800, 900, 1090, 345, 377];
// for(var i = 0; i < arr.length; i++){
//     if(arr[0] < arr[i]){
//         arr[0] = arr[i];
//     } 
// }
// console.log(arr[0])






// var arr = [150, 180, 20, 250, 80, 75, 777, 90, 50, 60, 98, 12, 43, 887, 15, 87, 1090, 1867, 19, 20]
//     for(var i = 0; i < arr.length/2; i++){
//         if(arr[0] < arr[i]){
//             arr[0] = arr[i]
//         }
// }
//     console.log(arr[0])
//     for(var i = arr.length/2; i < arr.length; i++){
//         if(arr[arr.length/2] < arr[i]){
//             arr[arr.length/2] = arr[i]
//         }
//     }
//     console.log(arr[arr.length/2])

    



//  var arr = [20, 50, 60, 40, 100, 10, 30, 15,1000]
//  if(arr.length%2==0){
//      var x = 0
//      for (var i = 0; i < arr.length/2-1; i++){
//          x = x + arr[i]
//      } 
//      console.log(x = x + arr[i])
//      var x = 0
//      for(var i = arr.length/2; i < arr.length-1; i++){
//          x = x + arr[i]
//      } 
//      console.log(x = x + arr[i])
//  }
//  else{  
//      var x = 0
//      for (var i = 0; i < arr.length/2-1-0.5; i++){
//          x = x + arr[i]
//      } 
//      console.log(x = x + arr[i])
//      var x = 0
//      for(var i = arr.length/2+0.5; i < arr.length-1; i++){
//          x = x + arr[i]
//      } 
//      console.log(x = x + arr[i])
//  }





// var arr = [20, 50, 60, 39, 100, 7, 41, 15,11]
// var y = 0
// var x = 0
// for (var i of arr){
//     if (i%2==0){
//         console.log(i,"even")
//             x = x + i
//     }
//     else{
//         console.log(i,"odd")
//            y = y + i
//     }
// }
// console.log(x-y)





// var arr = [20, 50, 60, 39, 100, 7, 41, 15 , 11]
// var y = [0]
// var x = [0] 
// for(var i of arr){
//     if(i%2==0 , x < i){
//        x = i
//     }
//     else if(i%2==1 , y < i) {
//         y = i
//     }
// }
// console.log(x)
// console.log(y)




// var name1 = "x" 
// var name2 = "y"  
// if (name1,name2){
//     [name1, name2]=[name2, name1]
// }
// console.log(name1,name2)




// var arr = [20,20, 50, 60, 39, 100, 7, 41, 15 , 11]
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



var arr = [
    [9],
    [5],
    [12],
    [12]
]
for(var i of arr){
    i.sort((a, b) => a - b)
}
console.log(arr)



// var arr = ["hello", "ann", "german" ]
// for (var y = 0; y < arr.length-1; y++){
//      for(var i = 0; i<arr.length-1;i++){
//          var x = arr[i]
//          if(arr[i].length<arr[i+1].length){
//              arr[i] = arr[i+1]
//              arr[i+1] = x
//          }
//      }  
//  }
//  console.log(arr)
    






// var x = ["America",  "italy", "France", "German"]
// for(var i = 0; i<x.length;i++){
//     if (x[i][0] == 'a' || x[i][0] == 'e' || x[i][0] == 'i' || x[i][0] == 'o' || x[i][0] == 'u' || x[i][0] == 'A' || x[i][0] == 'E' || x[i][0] == 'I' || x[i][0] == 'O' || x[i][0] == 'U') {
//             console.log(x[i])
//         }
// }



// x = prompt()
// var x1 = x.split(" ")
// var newarr = []
// for(var i of x1){
//     newarr.push(parseInt(i))
// }
// console.log(newarr)




// function add(x1,x2,x3){
//     return (x1+x2+x3)
// }
// console.log(add(x1=10,x2=30,x3=40))





//   function x2 (x1){
//    var arr = x1  
//    for (var x1 = 0; x1 < arr.length-1; x1++){
//         for(var i = 0; i<arr.length-1;i++){
//             var x = arr[i]
//             if(arr[i].length<arr[i+1].length){
//                 arr[i] = arr[i+1]
//                 arr[i+1] = x
//             }
//         }  
//     }
//     console.log(arr)
// }
//   x = prompt()
//   x2(x1=x.split(" "))
//   var newarr =[]
//   for (var i of x1){
//       newarr.push(i)
// }







// function x (x1,x2,x3){
//     var arr = []
//     for (var i = x1; i < x2; i++){
//         arr.push(parseInt(Math.random()*x3))
//     }
//     console.log(arr)
// }
// x(1,5,50)










// function x(x1,x2,x2) {
//     var arr = [];
//             for (var i = 0; i < x1; i++){
//                 arr.push((Math.random().toString(32).substring(x2)));
//              }
//              return arr;
// }
// console.log(x(11,12,3));









// var x ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(strLength, strCount) {
//     for(var y = 0; y<strCount; y++){
//     var word = "";
//     for ( var i = 0; i < strLength; i++ ) {
//         word += x[Math.floor(Math.random() * x.length)];
//     }
//     for (var j =0; j < word.length; j++){
//     var Numbers = 0;
//     var Capital = 0;
//     var lowercase = 0;
//         for (var k =0;k < word.length; k++){
//             if ( word[k] == 0 || word[k] == 1 || word[k] == 2 || word[k] == 3 || word[k] == 4 || word[k] == 5 || word[k] == 6 || word[k] == 7 || word[k] == 8 || word[k]== 9 ){
//                 Numbers++
//         }
//         else if (word[k] == word[k].toLocaleUpperCase() ) {
//             Capital++
//         }
//         else{
//             lowercase++
//     }
// }
// }    
//     console.log(word + " |",Capital+lowercase+"all letters|",Capital+"Capital letters|",lowercase+"lowercase letters|", Numbers+"Numbers")
// }
// }
// console.log(generateString(5,6))







// function x(arr1,arr2){  
//    var y = arr1[0]
//    var z = arr2[0]
//    for(var i = 0; i < arr1.length; i++){
//       if(y < arr1[i]){
//          y = arr1[i];
//       }
//    }
//    for(var i = 0; i < arr2.length; i++){
//       if(z < arr2[i]){
//          z = arr2[i];
//       }
//    }
//       console.log(y,z)
//       var h1 = document.getElementById("myh1")
//       h1.innerText = y
//       var h2 = document.getElementById("myh2")
//       h2.innerText = z
//       if (y<z) {
//          h1.style.color = "red"
//          h2.style.color = "green"
//       }
//       else if (z<y){
//          h1.style.color = "green"
//          h2.style.color = "red"
//       }
//       else{
//          h1.style.color = "blue"
//          h2.style.color = "blue"
//       }
// }
// console.log(x([1,20,40,52,2,80],[40,111,10,7,9,5]))
