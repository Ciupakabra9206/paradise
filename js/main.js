const nav = document.querySelector('nav')
const navBtn = document.querySelector('.burger-btn')
const allnavItems = document.querySelectorAll('.nav__item') 

const handleNav = () => {
    nav.classList.toggle('nav--active')

    allnavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNavItemsAniamation();
}

const handleNavItemsAniamation = () => {
    let delayTime = 0


    allnavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's'
        delayTime++
    })
}

navBtn.addEventListener('click', handleNav)