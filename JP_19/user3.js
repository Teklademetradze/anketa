var username = document.querySelector(".username")
var oldpassword = document.querySelector(".oldpassword")
var newpassword = document.querySelector(".newpassword")
var newpassword1 = document.querySelector(".newpassword1")
var save = document.querySelector(".save")
var arr = JSON.parse(localStorage.getItem("myuserarr"))
console.log(arr)
save.addEventListener("click", function(){
  for(var i of arr){
      if(i.firstname == username.value && i.password == oldpassword.value){
          if(newpassword1.value == newpassword.value){
              i.password = newpassword1.value
              localStorage.setItem("myuserarr",JSON.stringify(arr))
              break
          }
      }
  }
})