const collapsibleButton = document.querySelectorAll('.collapsible')
const navbarToggler = document.querySelector('.navbar-toggler')
const navbarClose = document.querySelector('.navbar-close')
const navbarCollapse = document.querySelector('.navbar-collapse')
const source = document.querySelectorAll('source')


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
})

navbarClose.addEventListener('click', function() {
    navbarCollapse.classList.remove('navbar-active')
    this.style.display = 'none'
    navbarToggler.style.display = 'block'
})

//Dark mode toggler: changes partners image source
  document.addEventListener('colorschemechange', (e) => {
    console.log(`Color scheme changed to ${e.detail.colorScheme}.`);
    source.forEach(src => {
        if (e.detail.colorScheme == 'dark') {
            src.setAttribute('media', '(prefers-color-scheme: dark)') 
        } else {
            src.setAttribute('media', '(prefers-color-scheme: light)')
        }
        
    })
  });