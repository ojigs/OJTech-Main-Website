const collapsibleButton = document.querySelectorAll('.collapsible')


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