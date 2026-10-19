
const botaoMenu = document.querySelector(".lista")
const menu = document.querySelector(".menu")

botaoMenu.addEventListener("click", function(){
    menu.classList.toggle("aberto")

if(menu.classList.contains("aberto")){
    botaoMenu.classList.remove("bi-list")
    botaoMenu.classList.add("bi-x-lg")

}
else{
    botaoMenu.classList.remove("bi-x-lg")
    botaoMenu.classList.add("bi-list")

}
}) 

const linksMenu = document.querySelectorAll(".menu a")

linksMenu.forEach(function(link){
    link.addEventListener("click", function(){
    menu.classList.remove("aberto")
    botaoMenu.classList.remove("bi-x-lg")
    botaoMenu.classList.add("bi-list")

})
})

 
const obs = new IntersectionObserver((entradas)=>{

    entradas.forEach((e)=>{
        if(e.isIntersecting){
            e.target.classList.add('mostrar')
            obs.unobserve(e.target)
        }
    })
},{threshold: 0.2})

document.querySelectorAll('.animar').forEach((el)=> obs.observe(el))



const formulario = document.querySelector("#formularioContacto")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    const nome = documentquerySelector("#nome").value
    const email = document.querySelector("#email").value
    const mensagem = document.querySelector("#mensagem").value

    const destinatario = "assisgermanopedro2@gmail.com"
    const assunto = encodeURIComponent("Contacto pelo portfolio")
    const corpo = encodeURIComponent(` ${nome}\nEmail:${email} \n\nMensagem:\n${mensagem}`)

    window.location.href = `mailto: ${destinatario}?subject= ${assunto}body=${corpo}`



})