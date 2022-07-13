const collapsibleButton = document.querySelectorAll('.collapsible')
const navbarToggler = document.querySelector('.navbar-toggler')
const navbarClose = document.querySelector('.navbar-close')
const navbarCollapse = document.querySelector('.navbar-collapse')


for (let i=0; i < collapsibleButton.length; i++) {
    collapsibleButton[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null 
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
}

// Navigation toggler
navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('navbar-active')
    this.style.display = 'none'
    navbarClose.style.display = 'block'

    console.log('click happened')
})

navbarClose.addEventListener('click', function() {
    navbarCollapse.classList.remove('navbar-active')
    this.style.display = 'none'
    navbarToggler.style.display = 'block'

    console.log('click happened')
})