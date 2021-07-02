const btnMobile = document.querySelector('.btn-mobile')

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('active')
    
    const active = navbar.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    
    if(active) {
        
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')

    } else {

        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')

    }
}

window.onscroll = () => {
    const navbarContainer = document.querySelector('.navbar-container')

    if (window.pageYOffset > 50){

        navbarContainer.style.background = '#fffbf5d4'
        navbar.style.background = '#fffbf5d4'
        navbarContainer.style.boxShadow = '0px 4px 2px rgba(0, 0, 0, 0.10)'

    } else {
    
        navbarContainer.style.background = '#FFFBF5'
        navbar.style.background = '#fffbf5d4'
        navbarContainer.style.boxShadow = 'none'


    }
}
