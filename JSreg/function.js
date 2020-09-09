function open_win(a){
    if (a == 1){
        document.getElementById("register_div").style.display='block';
        validate();
    }
    if(a == 2){
        document.getElementById("login_div").style.display='block';
    }
}
function close_win(a){
    if (a == 1){
        document.getElementById("register_div").style.display='none';
    }
    if(a == 2){
        document.getElementById("login_div").style.display='none';
    }
}

function validate(){
   document.getElementById("register_btn").style.pointerEvents = "none";

   var name_span=document.getElementById("name_error");
   var index_span=document.getElementById("index_error");
   var password_span=document.getElementById("password_error");
   
   
     function fullname(){
   
       var fullname=document.getElementById("full_name");
   
       if( (fullname.value.length < 5) || (!fullname.value.match(/^[a-zA-Z_ \u00C0-\u00FF]+$/))){
          name_span.innerHTML="Only characters and minimum  length is 5" +
              "";
        name_span.style.color="red";
       
        return false;
       
       }
       else{
         name_span.innerHTML="Good &#128578;";
         name_span.style.color="darkgreen";
       return true;
       }
   }
   
   function index_number(){
   
   
   var index=document.getElementById("username");
   
   
      
   if (index.value.length < 8) { 
   
   
     index_span.innerHTML="Chars or numbers, minimum length is 8";
     index_span.style.color="red";
     
     return false;
    }else{
      index_span.innerHTML="Good &#128578;";
     index_span.style.color="darkgreen";
    
     return true;
   
    }
   
    }
   
   
   
     function password(){
   
   var password=document.getElementById("password");
   
       if (password.value.length <6) {
         password_span.innerHTML="Minimum 6 characters";
         password_span.style.color="red";
         return false;
       }else{
         password_span.innerHTML="Good &#128578;";
         password_span.style.color="darkgreen";
         return true;
       }
   
   
     }
   
   
   
     function check(){
       if(fullname() && password() && index_number()){
           document.getElementById("register_btn").style.pointerEvents = "auto";
           verify();
       }else{
           document.getElementById("register_btn").style.pointerEvents = "none";
       }
   }
   
   
   
   
    
     document.getElementById("full_name").onkeypress = function() {fullname();check();};
     document.getElementById("full_name").onkeyup= function() {fullname();check()};  
     document.getElementById("full_name").onchange= function() {fullname();check();};
   
   
     document.getElementById("password").onkeypress = function() {password();check();};
     document.getElementById("password").onchange = function() {password();check();};
     document.getElementById("password").onkeyup = function() {password();check();};
    document.getElementById("username").onkeypress = function() {index_number();check();};
     document.getElementById("username").onkeyup = function() {index_number();check();};
     document.getElementById("username").onchange = function() {index_number();check();};
  }   

  function verify(){
    document.getElementById("reg_info").innerHTML="All fields are okay! &#128526; , now you can click on register button";
  }