// const content  = document.getElementById('content')

// function backGround() {
// const img = document.createElement('nav')
// img.classList.add('title')
// img.innerHTML = 'SEAMONSTERS SEA SHOP'
// content.appendChild(img)
// }

// function head() {
//     const header = document.createElement('header');
//     const toggleMenu = document.createElement('a')
//     toggleMenu.classList.add('toggle-button')

//     const togglelist = document.createElement('ul')
//     togglelist.classList.add('menu')

//     for(let i = 1; i <= 2; i++) {
//         const list = document.createElement('li')
//         list.classList.add('menu-options')
//         togglelist.appendChild(list)
//         toggleMenu.appendChild(togglelist)
//     }
//     header.appendChild(toggleMenu)
//     document.body.appendChild(header)
// }

// function createNav() {
//     const nav = document.createElement('nav')
//     nav.classList.add('main-nav');
    
    // const navul = document.createElement('ul')
    // const listArray = ['Home','Menu','About','Contact']
    // listArray.forEach(function(item) {
    //     const navli = document.createElement('li')
    //     const nava = document.createElement('a')
    //     nava.href=" ";
    //     const navspan = document.createElement('span')
    //     const text = document.createTextNode(item)
    //     nava.append(navspan,text);
    //     navli.appendChild(nava);
    //     navul.appendChild(navli)
    // })

//     nav.appendChild(navul)
//     document.body.appendChild(nav);
// }

// function readToggle() {
//     document.addEventListener('DOMContentLoaded',(event) => {
//         document.querySelector('.toggle-button').addEventListener('click', () => {
//             document.querySelector('body').classList.toggle('toggled');
//         });
//     });
// };

// function createTitle() {
//     const navtop = document.createElement('div')
//     navtop.classList.add('bg')
//     content.appendChild(navtop)
// }







// export {head,
//     readToggle,
//     createNav,
//     backGround,
//     createTitle
// }

const content = document.getElementById('content')

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
    const navul = document.createElement('ul')
    navul.classList.add('toggle-button')
    const listArray = ['Home','Menu','Contact']
    listArray.forEach(function(item) {
        const navli = document.createElement('li')
        // const navli2 = document.createElement('li')
        navli.classList.add('toggle-options')
        // navli2.classList.add('toggle-options')
        const navspan = document.createElement('span')
        const text = document.createTextNode(item)
        navli.append(navspan,text);
        navul.appendChild(navli)
    })

    navRight.appendChild(navul)

    nav.append(navLeft, navRight)
    content.appendChild(nav)
}

function mainBody() {
    const main = document.createElement('main')
    main.classList.add('main-img')
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    const overh1 = document.createElement('h1')
    overh1.innerHTML = 'ABOUT US'
    const overp = document.createElement('p')
    // overp.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci quisquam doloremque! Non, quasi excepturi magni saepe neque placeat cum delectus doloribus at vel quas atque ea ad, tempore consequatur beatae laborum. Accusantium mollitia culpa nam illo necessitatibus. Numquam et iste eaque quos minima quod excepturi ex ea nobis culpa! Odio omnis quo facere architecto, ipsam dicta quos voluptatibus deleniti.'
    overlay.appendChild(overh1,)
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

export {navHeader, mainBody, footer}