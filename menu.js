const btnMenu=document.getElementById("hamburguer-button")
const menu =document.getElementById ("menu")

btnMenu.classList.add("hamburguer-button-js-enabled")
btnMenu.setAttribute("aria-expanded","false")

btnMenu.addEventListener("click",function(){

    let expanded = this.getAttribute("aria-expanded") === "true"? true: false


    if(expanded){
        menu.classList.add("menu-closed")
    }else{
        menu.classList.remove ("menu-closed")
    }
})