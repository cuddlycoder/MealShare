
function SendDonateData(){ 
    //get input values from input field//
    let nameinput = document.getElementById("full-name").value
    console.log(nameinput)

    let emailinput = document.getElementById("email-add").value
    console.log(emailinput)

    let mealninput = document.getElementById("meal-name").value
    console.log(mealninput)

    let mealiinput = document.getElementById("meal-image").value
    console.log(mealiinput)

    let mealinginput = document.getElementById("meal-ing").value
    console.log(mealinginput)

    let allergies = document.getElementById("alle-rgies").value
    console.log(allergies)

    //Send Data to backend using PostRequest method  
    //allows us to send data to backend using http postrequest
    xhr = getXmlHttpRequestObject()

    //Send postresquest
    xhr.open("POST","http://127.0.0.1:8000/views/donate",true)

    //attach (staple) data to request
    //JSON IS A DICTIONARY. (NAME OF DATA AND DATA)
    xhr.send(JSON.stringify({"name": nameinput, "email": emailinput}))

}




document.getElementById("send").addEventListener("click", SendDonateData)
