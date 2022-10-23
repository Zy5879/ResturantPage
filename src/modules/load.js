const content = document.getElementById('content')
const main = document.getElementById('main-body')

function funcheader() {
    const header = document.createElement('header')
    const headertitle = document.createElement('h1')
    headertitle.textContent = 'KAFFEEHAUS'
    headertitle.classList.add('name')
    header.appendChild(headertitle)
    content.appendChild(header)
}

function funcNav() {
    const nav = document.createElement('nav');
    const navhome = document.createElement('button');
    navhome.classList.add('home')
    navhome.textContent = 'HOME'
    const navmenu = document.createElement('button');
    navmenu.classList.add('menu')
    navmenu.textContent = 'MENU'
    const navcontact = document.createElement('button')
    navcontact.classList.add('reach')
    navcontact.textContent = 'CONTACT'
    nav.append(navhome,navmenu,navcontact)
    content.appendChild(nav)
}

function funcMain() {
    const main = document.createElement('main')

    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    main.id = 'main-body'
    const mainh1 = document.createElement('h2')
    mainh1.classList.add('about')
    mainh1.textContent = 'ABOUT'
    const mainp = document.createElement('p')
    mainp.classList.add('lorem')
    mainp.textContent = 'Lorem ipsum, dolor  amet consectetur adipisicing elit. Dolores, delectus ut. Temporibus consequatur nostrum, culpa quam laudantium enim tenetur tempore aliquid animi esse praesentium aperiam aut dicta facilis quae officiis molestias sit itaque, sapiente ducimus nemo? Molestiae voluptatum at sunt.';
   
    overlay.append(mainh1,mainp)
    main.appendChild(overlay)
    content.appendChild(main)
}

function funcFooter() {
    const footer = document.createElement('footer')
    const footerp = document.createElement('p')
    footerp.classList.add('credit')
    footerp.textContent = 'CREATED BY ME'
    footer.appendChild(footerp)
    content.appendChild(footer)
}

function loadPage() {
    funcheader()
    funcNav()
    funcMain()
    funcFooter()
}

loadPage()

