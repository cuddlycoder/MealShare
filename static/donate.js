// Create object to send requests//
let xhr = null
getXmlHttpRequestObject = function(){
    if (!xhr){
        //create a new http request object if it doesn't exist already
        xhr = new XMLHttpRequest()
    }
    return xhr
}
function SendDonateData(){ 
    //get input values from input field//
    let nameinput = document.getElementById("full-name").value
    console.log(nameinput)

    let emailinput = document.getElementById("email-add").value
    console.log(emailinput)

    let addressinput = document.getElementById("address").value
    console.log(addressinput)

    let mealninput = document.getElementById("meal-name").value
    console.log(mealninput)

    let mealiinput = document.getElementById("meal-image")
    console.log(mealiinput)
    //get image from input field
    let file = mealiinput.files[0]
    console.log(file)

    let mealinginput = document.getElementById("meal-ing").value
    console.log(mealinginput)

    let allergies = document.getElementById("alle-rgies").value
    console.log(allergies)

    let confirm_message = document.getElementById("confirmation")
    let confirmation_done = document.getElementById("confirmation_done")

    if (!file){
        confirm_message.innerHTML = "Please select a meal image!"
        confirm_message.style.color = "red"
        return 
    }
    //clear old messages
    confirm_message.innerHTML = ""
    confirmation_done.innerHTML = ""

    const formdata = new FormData()
    
    //attach (staple) data to request
    //JSON IS A DICTIONARY. (NAME OF DATA AND DATA)
    formdata.append("image",file)
    formdata.append("data",JSON.stringify({ "name": nameinput, 
                                            "email": emailinput,
                                            "address": addressinput,  
                                            "meal-name": mealninput,  
                                            "meal-ingredients": mealinginput,
                                            "allergies": allergies }))

    //Send Data to backend using PostRequest method  
    //allows us to send data to backend using http postrequest
    xhr = getXmlHttpRequestObject()

    //Send postresquest
    xhr.open("POST","http://127.0.0.1:8000/views/donate",true)
    xhr.onload = function(){
        if (xhr.status === 200){
            confirmation_done.innerHTML = "Your information has been sent! Thank you!"
            confirmation_done.style.color = "green"
        }
        else{
            confirmation_done.innerHTML = "File upload failed! Please try again!"
            confirmation_done.style.color = "red"
        }
    }
    
    xhr.send(formdata)

}




document.getElementById("send").addEventListener("click", SendDonateData)
