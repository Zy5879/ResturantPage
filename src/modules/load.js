const content = document.getElementById('content')
// import {createMenu} from './menu'

function navHeader() {
    const nav = document.createElement('nav')
    nav.classList.add('nav-header')
    
    const navLeft = document.createElement('div')
    navLeft.classList.add('left-header')
    const webName = document.createElement('p')
    webName.classList.add('name')
    webName.innerHTML = 'SEAMONSTERS SEAFOOD SHACK'
    const webLogo = document.createElement('img')
    webLogo.classList.add('logo')
    navLeft.append(webName,webLogo)

    const navRight = document.createElement('div')
    navRight.classList.add('right-header')
    const nava = document.createElement('a')
    nava.classList.add('toggle-button')
    const navul = document.createElement('ul')
    navul.classList.add('buns')

    const navli = document.createElement('li')
    const navli2 = document.createElement('li')
    navli.classList.add('bun')
    navli2.classList.add('bun') 
    navul.append(navli,navli2)
    nava.appendChild(navul)

    navRight.appendChild(nava)

    nav.appendChild(navLeft)
    content.appendChild(nav)
    document.body.appendChild(navRight)
}

function mainBody() {
    const main = document.createElement('main')
    main.classList.add('main-img')
    const mainBody = document.createElement('div')
    mainBody.classList.add('main-body')
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    const overh1 = document.createElement('h1')
    overh1.innerHTML = 'ABOUT US'
    const overp = document.createElement('p')
    overp.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci quisquam doloremque! Non, quasi excepturi magni saepe neque placeat cum delectus doloribus at vel quas atque ea ad, tempore consequatur beatae laborum. Accusantium mollitia culpa nam illo necessitatibus. Numquam et iste eaque quos minima quod excepturi ex ea nobis culpa! Odio omnis quo facere architecto, ipsam dicta quos voluptatibus deleniti.'
    mainBody.append(overh1, overp)
    overlay.appendChild(mainBody)
    main.appendChild(overlay)
    content.appendChild(main);
}

function footer() {
    const foot = document.createElement('footer')
    const footp = document.createElement('p')
    footp.innerHTML = 'Created By Me'
    foot.appendChild(footp)
    content.appendChild(foot)
}

function clickToggle() {
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelector('.toggle-button').addEventListener('click', () => {
            document.querySelector('body').classList.toggle('toggled');
            console.log('Click')
        })
    })
}

function menuNav() {
    const menuNav = document.createElement('nav');
    menuNav.classList.add('menu-nav')
    const menul = document.createElement('ul')
    const menuli = document.createElement('li')
    const menuli2 = document.createElement('li')
    const menuli3 = document.createElement('li')

    const menuhome = document.createElement('a')
    menuhome.classList.add('home')
    menuhome.textContent = 'Home'
    const menuMenu = document.createElement('a')
    menuMenu.classList.add('menu')
    menuMenu.textContent = 'Menu'
    const menucontact = document.createElement('a')
    menucontact.classList.add('contact')
    menucontact.textContent = 'Contact'

    menuli.append(menuhome)
    menuli2.append(menuMenu)
    menuli3.append(menucontact)

    menul.append(menuli,menuli2,menuli3)


    // const listArray = ['Home','Menu','Contact']
    // listArray.forEach(function(item) {
    //   const menuli = document.createElement('li')
    //   const menua = document.createElement('a')
    //   menua.href =" ";
    //   const menuspan = document.createElement('span')
    //   const text = document.createTextNode(item)
    //   menua.append(menuspan,text)
    //   menuli.appendChild(menua)
    //   menul.appendChild(menuli)
    // })

    menuNav.appendChild(menul)
    document.body.appendChild(menuNav)
}

function loadPage() {
    navHeader()
    mainBody()
    footer()
    clickToggle()
    menuNav()
}

loadPage();


// export {navHeader, mainBody, footer, clickToggle, menuNav}