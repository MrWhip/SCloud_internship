const tabs = document.querySelectorAll('.whomBlock__tab')
const buttons = document.querySelectorAll('.whomBlock__button')

function select(idx) {
     for (let tab of tabs)
        tab.style.display = 'none'

     tabs[idx].style.display = 'flex'

     for (let button of buttons)
        button.classList.remove('whomBlock__button_active')

     buttons[idx].classList.add('whomBlock__button_active')
}

for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener('click', select.bind(null, i))
}
