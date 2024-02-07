//select all elements
const inputEmail= document.querySelector('.input-email');
const inputPassword= document.querySelector('#password');
const loginButton= document.querySelector('#button1');
const signupButton= document.querySelector('#button2');
const container = document.querySelector('.container');
const popup= document.querySelector('.popup');

// store user  credentials
let userCredentials= {};
let gmail;
//hide the popup of unvalid credenrials
popup.style.opacity=0;
//function to display and hide the popup
const updatePopup= function (){
    popup.style.opacity=1;
    popup.innerHTML="Invalid Email or password";
    setTimeout( function(){popup.style.opacity=0} , 3000);
}
//a function to store the credentials
const credentialsFunction= function(email,password){
    if(email.length>=11 && gmail==="@gmail.com" && password.length>=8){
    userCredentials[email]=password;
}
   
}
// a function to check a valid email
const validEmail= function(email){
 gmail = email.slice(-10);
if(email.length>=11 && gmail==="@gmail.com"){
    return email;
}
else{
  updatePopup(); 
}
}
// a function to check a valid password
const ValidPassword = function(password){
    if(password.length>=8){
       return password;
    }
    else{
        popup.style.opacity=1;
        popup.innerHTML="Invalid Email or password";
        setTimeout( function(){popup.style.opacity=0} , 3000);
    }
    }
   

//eventlisteners
signupButton.addEventListener('click', function(e){
    e.preventDefault();
    let userEmail= inputEmail.value;
let userPassword=inputPassword.value;
validEmail(userEmail);
ValidPassword(userPassword);

credentialsFunction(userEmail,userPassword);
// userEmail=userPassword="";
})
loginButton.addEventListener('click', function(){
    for(let cred in userCredentials){
        if(cred===inputEmail.value && userCredentials[cred] === inputPassword.value){
            container.innerHTML= 'Welcome back '
            container.style.backgroundColor= 'black';
            container.style.color= 'white';
            document.body.style.backgroundColor='rgb(4, 92, 108)'
            window.open('https://www.linkedin.com/feed/',"_blank")
        }
        else{
            console.log('incorrect username or password')
        }
    }
})

