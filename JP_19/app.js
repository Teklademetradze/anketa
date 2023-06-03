// function save(){
//     var arr = ["canada",  "china",  "german"]
//     for(var i of arr){
//         if(i.startsWith(inp.value)){
//             head.innerText+= " "+ i
//             head.style.color = "lightgreen"
//         }
//     }
// }





//  function x(arr){
//      var y = 0
//      for(i of arr){
//          y += i
//      }
//      return y,y/arr.length
//  }
//  console.log(x([1,2,3,4,5,6,7,8,9,10]))





// inp.addEventListener("keyup",function(e){
//     var arr = ["canada",  "china",  "german", "canada", "canada", "german"]
//     if (e.keyCode == 13) {
//     head.innerText= " "
//     var x = 0  
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i].startsWith(inp.value) && inp.value!=""){
//             x++
//         }       
// }
//     head.innerText+= " " + x
// }
// })




// var x =3
// body.addEventListener("keyup",function(e){
//     if((e.keyCode==44)){
//         x=x-1
//         alert(x+"clicks left")
//         }
//         if(x==0){
//             body.style.display = "none"
//         }   
// })




// var arr =[134,56,78,23,46]
// var x =0
// for(var i = 0; i <arr.length;i++){
//     if(arr[i]%2==0){
//         x++
//         console.log(i)
//     }
// }




// inp.addEventListener("keyup",function(e){
// var x = inp.value.split(" ")
// if(e.keyCode==13 && e.keyCode != " "){
// var y = 0
// for (var i = 0; i < x.length; i++){
//     y++
// }
// head.innerText = y + " words"
//     }
// })




// var arr = []
// for (var i = 0; i < 20; i++){
//     arr.push(parseInt((Math.random()*3000)));
// }
// console.log(arr.filter(i => i > 100 && i < 1000))




// function x (x1,c1,v1,x2,c2,v2,x3,c3,v3){
//         var arr = []
//         var y = 0
//     for (var i = 0; i < x1; i++){
//         arr.push(parseInt((Math.random()*c1)+v1))
//     }
//     console.log(arr.filter(i=> i%2==0 ))
//     var z = arr.filter(i=> i%2==0)
//     var z2 = (z.filter(i=> y+=i))
//     console.log(parseInt(y/z2.length))

//     var arr2 = []
//     var y2 = 0
//     for (var i = 0; i < x2; i++){
//         arr2.push(parseInt((Math.random()*c2)+v2))
//     }
//     console.log(arr2.filter(i=> i%2==0))
//     var z3 = arr2.filter(i=> i%2==0)
//     var z4 = (z3.filter(i=> y2+=i))
//     console.log(parseInt(y2/z4.length))

//     var arr3 = []
//     var y3 = 0
//     for (var i = 0; i < x3; i++){
//         arr3.push(parseInt((Math.random()*c3)+v3))
//     }
//     console.log(arr3.filter(i=> i%2==0))
//     var z5 = arr3.filter(i=> i%2==0)
//     var z6 = (z5.filter(i=> y3+=i))
//     console.log(parseInt(y3/z6.length))
// }
// x(5,10,1, 20,8,9 ,5,20,8)


