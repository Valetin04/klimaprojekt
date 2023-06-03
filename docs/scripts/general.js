document.querySelectorAll("img").forEach(e => {
    e.addEventListener("click", event => {
        event.target.parentNode.classList.toggle("image-opened")
    })
})