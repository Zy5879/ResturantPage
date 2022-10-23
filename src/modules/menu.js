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

// const main = document.querySelector('.main-body');

// const main = document.getElementById('main-body')

const overlay = document.querySelector('.overlay')

function newMenu () {
    const menupage = document.createElement('div')
    menupage.classList.add('menulist')

    const menuheader = document.createElement('h2')
    menuheader.classList.add('menuheader')
    menuheader.innerHTML = 'MENU'

    const menuitem1 = document.createElement('div')
    const menuitem1title = document.createElement('div')
    menuitem1title.innerHTML = 'CARAMEL MACCHIATO'
    const menuitemp = document.createElement('p')
    menuitemp.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    
    const menuitem2 = document.createElement('div')
    const menuitem2title = document.createElement('div')
    menuitem2title.innerHTML = 'PUMPKIN SPICE LATTE'
    const menuitemp2 = document.createElement('p')
    menuitemp2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    
    const menuitem3 = document.createElement('div')
    const menuitem3title = document.createElement('div')
    menuitem3title.innerHTML = 'FLAT WHITE CHOCOLATE MOCHA'
    const menuitemp3 = document.createElement('p')
    menuitemp3.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

    const menuitem4 = document.createElement('div')
    const menuitem4title = document.createElement('div')
    menuitem4title.innerHTML = 'ESPRESSO'
    const menuitemp4 = document.createElement('p')
    menuitemp4.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

    const menuitem5 = document.createElement('div')
    const menuitem5title = document.createElement('div')
    menuitem5title.innerHTML = 'FRAPPUCCINO'
    const menuitemp5 = document.createElement('p')
    menuitemp5.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

    const menuitem6 = document.createElement('div')
    const menuitem6title = document.createElement('div')
    menuitem6title.innerHTML = 'BLACK COFFEE'
    const menuitemp6 = document.createElement('p')
    menuitemp6.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

    menuitem1.append(menuitem1title,menuitemp)
    menuitem2.append(menuitem2title,menuitemp2)
    menuitem3.append(menuitem3title, menuitemp3)
    menuitem4.append(menuitem4title, menuitemp4)
    menuitem5.append(menuitem5title, menuitemp5)
    menuitem6.append(menuitem6title, menuitemp6)


    // const imgoverlay = document.createElement('div')
    // imgoverlay.classList.add('imgoverlay')
    // const imgname = document.createElement('div')
    // const imgdescription = document.createElement('p')
    // menuitem1.classList.add('item1img')
    // menuitem1.src = "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"

    // const imgoverlay = document.createElement('div')
    // imgoverlay.classList.add('imgoverlay')
    // const imgname = document.createElement('div')
    // imgname.classList.add('img_title')
    // imgname.innerHTML = 'Salmon'
    // const imgCost = document.createElement('p')
    // imgCost.classList.add('imgCost')
    // imgCost.innerHTML = '$20'
    
    // imgoverlay.append(imgname, imgCost)
    // menupage.append(menuitem1,imgoverlay)

    // const menuitem2 = document.createElement('img')
    // menuitem2.classList.add('item2img')
    // menuitem2.src = "https://images.unsplash.com/photo-1610505127058-2ed68ad7d21e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1622&q=80"

    // const menuitem3 = document.createElement('img')
    // menuitem3.classList.add('item3img')
    // menuitem3.src = "https://images.unsplash.com/photo-1636401870585-a8852371e84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"

    // const menuitem4 = document.createElement('img')
    // menuitem4.src = 'https://images.unsplash.com/photo-1550586554-a5a846e56593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80'

    // const menuitem5 = document.createElement('img')
    // menuitem5.src ='https://images.unsplash.com/photo-1625943555419-56a2cb596640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'

    // const menuitem6 = document.createElement('img')
    // menuitem6.src = 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'


    menupage.append(menuheader, menuitem1, menuitem2, menuitem3, menuitem4, menuitem5, menuitem6)
    overlay.appendChild(menupage)
}

const menuBtn = document.querySelector('.menu').addEventListener('click', () => {
    // const meuncontent = document.querySelector('.main-body')
    // const meuncontent = document.getElementById('main-body')
    const meuncontent = document.querySelector('.overlay')
    while(meuncontent.firstChild) {
        meuncontent.removeChild(meuncontent.firstChild);
    }
    newMenu()
});