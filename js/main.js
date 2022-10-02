const collapsibleButton = document.querySelectorAll('.collapsible')
const navbarToggler = document.querySelector('.navbar-toggler')
const navbarClose = document.querySelector('.navbar-close')
const navbarCollapse = document.querySelector('.navbar-collapse')
const source = document.querySelectorAll('source')
const partners = document.querySelectorAll('.partners-container')
const productsToggle = document.querySelector('.products-toggle')


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
    source.forEach(src => {
        if (e.detail.colorScheme == 'light') {
            let reSrcset = src.srcset.replace('re-', '')
            src.setAttribute('srcset', reSrcset) 
        } else {
            let re = src.srcset.slice(0, 4) + 're-' + src.srcset.slice(4)
            if (re.includes('re-re')) {
                re = re.replace('re-re', 're')
            }
            src.setAttribute('srcset', re)
        }   
    })
  });

// Product nav toggle
productsToggle.addEventListener('click', () => {
    var x = document.querySelector(".dropdown");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
})