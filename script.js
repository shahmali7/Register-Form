const firstName= document.querySelector('.name')
const email =document.querySelector('.email')
const password = document.querySelector('.password')
const confirmps  = document.querySelector('.confirm')
const register = document.querySelector('#register')
const age =document.querySelector('.date')
const erremail =document.querySelector('.erremail')
const error = document.getElementById('errorpswrd')
const matcherr =document.querySelector('#match')
const errAge = document.querySelector('#date')
const regx = /^([a-zA-Z0-9\.\_]+)@([a-zA-Z]+)\.([a-z]{2,5})?$/
let a=false;
let b=false;
let c=false;

register.addEventListener('click',(e)=>{
    e.preventDefault()

    if(email.value.match(regx)){
       erremail.innerHTML= ''
       a=true;
    }else {
        erremail.innerHTML='Please write correct email'
    }if(password.value!='' && password.value.length>=8 && confirmps.value!=''){ 
        if(password.value.includes(firstName.value) ){
            matcherr.innerHTML =  "You can not use name in password"
            password.value =''
            confirmps.value =''
    
        }else {
            matcherr.innerHTML = ''
        }
        if (password.value !== confirmps.value){
            error.innerHTML="Please write the same password"
    
        }else{
            error.innerHTML = ''
            b=true;
        }
    }else{
        matcherr.innerHTML = 'Please blank password'
    }
    var chooseAge =new Date(age.value)
    var currentYear = new Date()
    var currentAge =currentYear.getFullYear()-chooseAge.getFullYear()
    if(age.value!=''){
        if(currentAge<18){
            errAge.innerHTML = 'You must be 18 years old'
        }else{
            errAge.innerHTML = ''
            c=true;
        }
    }else{
        errAge.innerHTML = 'Please write your age'
    }
    if(a==true && b==true && c==true){
        alert('You are registered')
        firstName.value='';
        email.value='';
        password.value='';
        confirmps.value='';
        age.value='';
    }
    else{
        alert('You are not registered')
    }
    
})