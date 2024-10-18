
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
}





document.getElementById("submit").addEventListener("click", SendDeliverData)
