var firstname = document.querySelector(".firstname");
var password1 = document.querySelector(".password1")
var password2 = document.querySelector(".password2")
var page2 = document.querySelector(".page2")
var arr = JSON.parse(localStorage.getItem("myuserarr")) || []

                
var today = new Date();
page2.addEventListener("click", function(){
    var found = false
   if(password1.value.length > 7 && password1.value == password2.value 
    && password1.value.toLowerCase() != password1.value){
        for(var i of arr){
            if(i.firstname == firstname.value){
               found = true
            }
        }
        if(found==false){
            var obj = {
                firstname:firstname.value,
                password:password1.value,
                time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            }
            arr.push(obj)
        }
        else{
            console.log("no")
        }
    }
    localStorage.setItem("myuserarr",JSON.stringify(arr))

})

