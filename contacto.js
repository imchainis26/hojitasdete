const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const texto = document.getElementById('texto')
const form = document.getElementById('formulario')
const parrafo = document.getElementById('advertencias')

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ''
    let entrar = false
    let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/
    parrafo.innerHTML = ""
    if(nombre.value.length==0){
        warnings += 'Ingrese su nombre. <br> '
        entrar = true
    }
    if(apellido.value.length==0){
        warnings += 'Ingrese su apellido. <br> '
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += 'Ingrese su correo electrónico. <br>'
        entrar = true
    }
    if(texto.value.length==0){
        warnings += 'Ingrese un comentario. <br>'
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
        parrafo.innerHTML = "Enviado."
    }
})