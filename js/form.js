document.querySelector("#formContact").addEventListener("submit", (e) => {
    e.preventDefault()
    
    const fullName = e.target.txtFullName.value
    const phoneNumber = e.target.txtPhoneNumber.value
    const email = e.target.txtEmail.value
    const persons = e.target.txtPersons.value
    const date = e.target.dataDateAndTime.value
    const information = e.target.txtInformation.value

    const dialog = document.querySelector("#modalContact")

    dialog.querySelector("#form-full-name").innerText = fullName
    dialog.querySelector("#form-phone-number").innerText = phoneNumber
    dialog.querySelector("#form-email").innerText = email
    dialog.querySelector("#form-persons").innerText = persons
    dialog.querySelector("#form-date").innerText = date
    dialog.querySelector("#form-information").innerText = information

    dialog.showModal()

    e.target.reset()

    dialog.querySelector("button.close").addEventListener("click", (e) => {
        e.preventDefault()

        dialog.close()
    })

})