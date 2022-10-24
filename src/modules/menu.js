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