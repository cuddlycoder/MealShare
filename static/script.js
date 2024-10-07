//Send user to donate page
document.getElementById("donate-btn").addEventListener("click",function(event){
    window.location.href = "http://127.0.0.1:8000/views/donate"
})

//Send user to deliver page
document.getElementById("deliver-btn").addEventListener("click",function(event){
    window.location.href = "http://127.0.0.1:8000/views/deliver"
})

//Send user to login page
document.getElementById("signin-btn").addEventListener("click",function(event){
    window.location.href = "http://127.0.0.1:8000/views/login"
})

//Send user to sign up page 
document.getElementById("signup-btn").addEventListener("click",function(event){
    window.location.href = "http://127.0.0.1:8000/views/signup"
})
