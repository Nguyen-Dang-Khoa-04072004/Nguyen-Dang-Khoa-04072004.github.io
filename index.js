const navLinks = document.querySelectorAll(".menu .navbar ul li")
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove("active"))
        link.classList.add("active")
    })
})