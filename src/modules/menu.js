// import { navHeader,footer,clickToggle,menuNav } from "./load"
// navHeader()
// footer()
// clickToggle()
// menuNav()
// const content = document.getElementById('content')

const overlay = document.querySelector('.overlay')

function createMenu() {
    const menupage = document.createElement('div')
    menupage.classList.add('allmenu')
    // for(let i = i; i <= 4; i++) {
    //     const menuimage = document.createElement('div')
    //     menupage.appendChild(menuimage)
    // }
    const firstmenu = document.createElement('div');
    firstmenu.classList.add('salmon')
    const secondmenu = document.createElement('div');
    secondmenu.classList.add('salmon')

    const thirdmenu = document.createElement('div');
    thirdmenu.classList.add('salmon')

    const fourthmenu = document.createElement('div');
    fourthmenu.classList.add('salmon')


    menupage.append(firstmenu,secondmenu,thirdmenu,fourthmenu)

    overlay.appendChild(menupage)
}

const menuBtn = document.querySelector('.menu').addEventListener('click', () => {
    const menuContent = document.querySelector('.overlay')
    while(menuContent.firstChild) {
        menuContent.removeChild(menuContent.firstChild);
    }
    createMenu()
});

// export {
//     createMenu
// }