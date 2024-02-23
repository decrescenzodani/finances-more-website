//menu
const linksMenu = $(".menu a") 
console.log(linksMenu)

linksMenu.on("click", function(e){
    e.preventDefault()
    console.log(e.target)
    const dataId = $(e.target).data("id")
    console.log(dataId)
    const elementTarget = $("#" + dataId)
    const positionElementTarget = elementTarget.offset().top
    console.log(positionElementTarget)
    $("html, body").animate({scrollTop: positionElementTarget - 120}, 1000)
})



//Submenu
const services = $("#services")
const submenu = $(".submenu")
const header = $(".header-content")

services.on("mouseover", function(){
    submenu.show()
})

submenu.on("mouseleave", function(){
    $(this).hide()
})
header.on("mouseleave", function(){
    submenu.hide()
})




// Form Validation
const buttonForm = $("#btn-form")
const inputName = $("#name")
const inputEmail = $("#email")
const inputMessage = $("#message")
const divSuccessMessage = $("#success-message")
const messages = {
    required: "Este campo é obrigatório!",
    inputNameLength: "O nome deve conter no mínimo 5 letras.",
    inputEmailValidation: "O campo deve conter um formato de email válido.",
    inputMessageValidation: "A mensagem deve conter no mínimo 20 caracteres.",
    messageSuccess: "Sua mensagem foi enviada com sucesso!"
}

function validationName(input, value) {
    if (!value) {
        input.siblings("span").html(messages.required)
        return false
    }

    if (value.length < 5) {
        input.siblings("span").html(messages.inputNameLength)
        return false
    }

    input.siblings("span").html("")// a funcao .siblings("") pega o primeiro irmao, neste caso, html do span.
    return true

}

function validationMessage(input, value) {
    if (value.trim() === "") { // a funcao ".trim()"", verifica se o campo está vazio (após remover espaços em branco no início e no final).
        input.siblings("span").html(messages.required)
        return false
    }

    if (value.length < 20) {
        input.siblings("span").html(messages.inputMessageValidation)
        return false
    }

    input.siblings("span").html("")
    return true

}

function validationEmail(input, value) {
    const regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if(!value){
        input.siblings("span").html(messages.required)
        return false
    }

    if(!regexEmail.test(value)){
        input.siblings("span").html(messages.inputEmailValidation)
        return false
    }

    input.siblings("span").html("")
    return true
}

buttonForm.on("click", function (e) {
    e.preventDefault() //aqui eu uso o "e.preventDefault" pra cancelar o comportamento padrao do botao.
    const inputNameVal = $("#name").val()
    const inputEmailVal = $("#email").val()
    const inputMessageVal = $("#message").val()

    const inputNameValid = validationName(inputName, inputNameVal)
    const inputEmailValid = validationEmail(inputEmail, inputEmailVal)
    const inputMessageValid = validationMessage(inputMessage, inputMessageVal)

    if(!inputNameValid || !inputEmailValid || !inputMessageValid){
        return
    }

    divSuccessMessage.html(messages.messageSuccess)
    divSuccessMessage.show()
})