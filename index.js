const navLinks = document.querySelectorAll(".menu .navbar ul li")
const sections = document.querySelectorAll('section')
const setActiveLink = link => {
    navLinks.forEach(l => l.classList.remove("active"))
        link.classList.add("active")
        const sectionId = link.dataset.sectionId
        const section = document.getElementById(sectionId)
        console.log(section.offsetTop)
        // section.scrollIntoView({behavior: 'smooth'})
}

navLinks.forEach(link => {
    link.addEventListener('click', () => setActiveLink(link))
})


window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if (section.offsetTop - window.scrollY < 20){
            navLinks.forEach(link => {
                if(link.dataset.sectionId !== section.id){
                    link.classList.remove('active')
                }else{
                    link.classList.add('active')
                }
            })
        }
    })
})