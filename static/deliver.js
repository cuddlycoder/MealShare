let xhr = null
getXmlHttpRequestObject = function(){
    if(!xhr){
        xhr = new XMLHttpRequest()
    }

    return xhr
}
function SendDeliverData(){
    let nameinput = document.getElementById("full-name").value
    console.log(nameinput)

    let emailinput = document.getElementById("email-add").value
    console.log(emailinput)

    let phoneninput = document.getElementById("phone-num").value
    console.log(phoneninput)

    let adress = document.getElementById("address").value
    console.log(adress)

    let distance = document.getElementById("distance").value
    console.log(distance)

    let cartype = document.getElementById("car-type").value
    console.log(cartype)

    let confirm_deliver = document.getElementById("confirm_deliver")
    confirm_deliver.innerHTML = ""

    //Send Data to backend using PostRequest method  
    //allows us to send data to backend using http postrequest
    xhr = getXmlHttpRequestObject()

    //Send postresquest
    xhr.open("POST","http://127.0.0.1:8000/views/deliver",true)
    xhr.onload = function(){
        if (xhr.status === 200){
            confirm_deliver.innerHTML = "Your information has been sent! Thank you!"
            confirm_deliver.style.color = "green"
        }
        else{
            confirm_deliver.innerHTML = "Upload failed! Please try again!"
            confirm_deliver.style.color = "red"
        }
    }

    xhr.setRequestHeader("Accept","application/json")
    xhr.setRequestHeader("Content-Type","application/json")

    //attach (staple) data to request
    //JSON IS A DICTIONARY. (NAME OF DATA AND DATA)
    xhr.send(JSON.stringify({
        "name": nameinput, 
        "email": emailinput, 
        "phone-num": phoneninput, 
        "address": adress, 
        "distance": distance,
       "car-type": cartype }))

}





document.getElementById("submit").addEventListener("click", SendDeliverData)
