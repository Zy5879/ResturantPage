// import { navHeader,footer,clickToggle,menuNav } from "./load"
// navHeader()
// footer()
// clickToggle()
// menuNav()
// const content = document.getElementById('content')

// const overlay = document.querySelector('.overlay')

// function createMenu() {
//     const menupage = document.createElement('div')
//     menupage.classList.add('allmenu')
    // for(let i = i; i <= 4; i++) {
    //     const menuimage = document.createElement('div')
    //     menupage.appendChild(menuimage)
    // }
    // const firstmenu = document.createElement('div');
    // firstmenu.classList.add('salmon')
    // const secondmenu = document.createElement('div');
    // secondmenu.classList.add('salmon')

    // const thirdmenu = document.createElement('div');
    // thirdmenu.classList.add('salmon')

    // const fourthmenu = document.createElement('div');
    // fourthmenu.classList.add('salmon')


    // menupage.append(firstmenu,secondmenu,thirdmenu,fourthmenu)

    // overlay.appendChild(menupage)
// }

// const menuBtn = document.querySelector('.menu').addEventListener('click', () => {
//     const menuContent = document.querySelector('.overlay')
//     while(menuContent.firstChild) {
//         menuContent.removeChild(menuContent.firstChild);
//     }
//     createMenu()
// });

// export {
//     createMenu
// }

const main = document.querySelector('.main-body');

function newMenu () {
    const menupage = document.createElement('div')
    menupage.classList.add('menulist')
    const menuitem1 = document.createElement('img')
    menuitem1.classList.add('item1img')
    menuitem1.src = "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"

    const menuitem2 = document.createElement('img')
    menuitem2.classList.add('item2img')
    menuitem2.src = "https://images.unsplash.com/photo-1610505127058-2ed68ad7d21e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1622&q=80"

    const menuitem3 = document.createElement('img')
    menuitem3.classList.add('item3img')
    menuitem3.src = "https://images.unsplash.com/photo-1636401870585-a8852371e84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"

    menupage.append(menuitem1,menuitem2,menuitem3)
    main.appendChild(menupage)
}

const menuBtn = document.querySelector('.menu').addEventListener('click', () => {
    const meuncontent = document.querySelector('.main-body')
    while(meuncontent.firstChild) {
        meuncontent.removeChild(meuncontent.firstChild);
        // meuncontent.remove(meuncontent)
    }
    newMenu()
});