// var tb = document.querySelector(".tb1")


// fetch("https://api.coingecko.com/api/v3/exchange_rates")
// .then(x=> x.json())

// .then(z=> {
//     console.log(z)
//     // var tmp = 0
//     for(var j of Object.values(z.rates)){
//         console.log(j)
    
// var tmp = `
// <tr>
// <td>${j.name}</td>
// <td>${j.value}</td>
// <td>${j.type}</td>
// </tr>
// `
// tb.innerHTML += tmp
//     }

// })
// // myobj = {
// //     usd:3,
// //     gel:1,
// //     gbp:4
// // }
// // console.log(Object.entries(myobj))


// var inp = document.querySelector(".inp")
// var card = document.querySelector(".card")
// var save = document.querySelector(".save")
// save.addEventListener("click",function(){
//     fetch(`https://api.jikan.moe/v3/search/anime?q=${inp.value}`)
//     .then(x => x.json())
//     .then(obj =>{
//         for(var j of Object.values(obj.results)){  
//         var cardtmp = `
//         <h1>${"title:  "+j.title}</h1>
//         <h2>${"url:   "+j.url}</h2>
//         <h2>${"end_date:   "+j.end_date}</h2>
//         <h2>${"members:   "+j.members}</h2>
//         <h2>${"image:   "+j.image_url}</h2>
//         <h2>${"rated:   "+j.rated}</h2>
//         `
//         card.innerHTML = cardtmp
//         }
//     })
// })



// var inp = document.querySelector(".inp")
// var card = document.querySelector(".card")
// var save = document.querySelector(".save")
// var img = document.createElement("img")
// save.addEventListener("click",function(){
//     fetch(`https://api.jikan.moe/v3/search/anime?q=${inp.value}`)
//     .then(x => x.json())
//     .then(obj =>{
//         var cardtmp = 0
//         for(var j of Object.values(obj.results)){  
//         var cardtmp = `
//         <h1>${"title:  "+j.title}</h1>
//         <h2>${"end_date:   "+j.end_date}</h2>
//         <h2>${"members:   "+j.members}</h2>
//         ${img.src = j.image_url}
//         <h2>${"rated:   "+j.rated}</h2>
//         `
//         card.innerHTML += cardtmp
//         document.getElementById('body').appendChild(img);
//         }
//     })
// })




var inp = document.querySelector(".inp")
var save = document.querySelector(".save")
save.addEventListener("click", function(){
    fetch(`https://api.agify.io/?name=${inp.value}`)
    .then(x => x.json())
    .then(obj => {
        console.log(obj)
    })
})