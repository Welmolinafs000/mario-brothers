const myButton = document.querySelector(".button-entre-contato")
const form = document.querySelector(".formulario-fale-conosco")
const mask = document.querySelector(".mascara-formulario")
const buttonOrçamento = document.querySelector('.orçamento')

const formulario = () => {
    form.style.left = "70%"
    form.style.transform = "translateX(-70%)"
    mask.style.visibility = "visible"
}

const hiddenMask = () => {
    form.style.left = "1px"
    mask.style.visibility = "hidden"
    form.style.transform = "translateX(0)"

}

myButton.addEventListener("click", formulario)
mask.addEventListener('click', hiddenMask )