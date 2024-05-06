const form = document.getElementById("form");
let err = document.getElementById("err");
let pss = document.getElementById("pass");

let email = document.getElementById("email");
let password = document.getElementById("password");

email.addEventListener("input", check);
password.addEventListener("input",check);


form.addEventListener("submit",function(event){
     event.preventDefault();
   if(count === 2){
     alert("Successfull signup!");
   }
   email.value = "";
   password.value="";
   count=0;
});

let count = 0;
function check(){
     count =0; // just to make sure we dont face any errr
     if(email.value.length >3 && email.value.includes("@") && email.value.includes(".")){
          err.style.display = "none";
          count++;
     }
     if(password.value.length>8){
          count++;
     }
     if(count ==2){
          pss.innerHTML = "All good to go!";
          pss.style.color= "#219F35";
          
     }

}