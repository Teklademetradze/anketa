// function arr(arr1,arr2){
//     var arrb = [
        
//     ]
//     for(var i = 0; i < arr1; i++){
//         for(var z =0; z < arr2; z++){
//             arrb[z] = parseInt(Math.random()*5)
//         }
//         console.log(arrb)
//         }
// }

// arr(5,6)



// var arr = [
//   ["my"],
//   ["aaaaaadbfhkbdf"],
//   ["khaggdugsa"],
//   ["dsfbkfd"]
// ]
// document.body.innerHTML= arr
// for(var i of arr){
//   var vowel = 0;
//   var consonant = 0;
//     for( var y of i){
//       console.log(y)
//       for(var x of y){
//       if(x[0] == "a" || x[0] == "e" || x[0] == "i" || x[0] == "o" || x[0] == "u" ||
//          x[0] == "A" || x[0] == "E" || x[0] == "I" || x[0] == "O" || x[0] == "U") {
//           vowel++;
//       } 
//       else if(x[0] != "a" || x[0] != "e" || x[0] != "i" || x[0] != "o" || x[0] != "u" ||
//          x[0] != "A" || x[0] != "E" || x[0] != "I" || x[0] != "O" || x[0] != "U"|| x[0] != " ") {
//         consonant++;
//       }
//     }
//     }
   
//     console.log(consonant+" consonant")
//     console.log(vowel+" vowels") 
// }



var maintbl1 = document.querySelector(".maintbl1")
var maintbl2 = document.querySelector(".maintbl2")
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
var objarr = []
var area = document.querySelector(".area")
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
}
var arr1 = objarr.sort(function(a,b){return a.tanx - b.tanx});
var arr2 = [].concat(arr1).reverse()
for(i of arr1){
    var a = `
        <tr>
            <td>${i.word}</td>
            <td>${i.xmovn}</td>
            <td>${i.tanx}</td>
        </tr>
    `
    maintbl1.innerHTML+=a
}
for(i of arr2){
    var b = `
        <tr>
            <td>${i.word}</td>
            <td>${i.xmovn}</td>
            <td>${i.tanx}</td>
        </tr>
    `
    maintbl2.innerHTML+=b
}
if(tmpobj.tanx>tmpobj.xmovn*3){
    td.style.color = "red"
}