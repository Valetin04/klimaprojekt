document.querySelectorAll("img").forEach(e => {
    e.addEventListener("click", event => {
        event.target.parentNode.classList.toggle("image-opened")
        
        if(event.target.parentNode.classList.contains("image-opened"))
            document.body.setAttribute("style", "overflow:hidden;")
        else
            document.body.removeAttribute("style")
    })
})