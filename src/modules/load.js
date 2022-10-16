

// function createNav() {
//     const div = document.createElement('div')
//     div.classList.add('nav')
//     const p = document.createElement('p')
//     p.classList.add('color-TBA');
//     p.innerHTML = 'SEAMONSTERS SEAFOOD SHOP'
//     const a = document.createElement('a')
//     a.classList.add('toggle-button')
//     const ul =  document.createElement('ul')
//     ul.classList.add('menu')
//     const li = document.createElement('li')
//     li.classList.add('menu-options')
//     const li2 = document.createElement('li')
//     li2.classList.add('menu-options')
//     ul.append(li,li2)
//     a.appendChild(ul);
    
//     p.appendChild(a)
//     div.append(p,a)
//     return div;


// }


// function createImg() {
//    const imgDiv = document.createElement('div')
//    imgDiv.classList.add('bg-img')
//    return imgDiv;
// }

// function navOptions() {
//     const navmain = document.createElement('nav');
//     navmain.classList.add('main-nav')
    
//     const ulnav = document.createElement('ul')
//     ulnav.classList.add('nav-options')

//     const item1 = document.createElement('li')
//     item1.classList.add('lisitem')
//     item1.innerHTML = 'Home';

//     const item2 = document.createElement('li')
//     item2.innerHTML = 'About';
//     item2.classList.add('lisitem')

//     const item3 = document.createElement('li')
//     item3.classList.add('lisitem')
//     item3.innerHTML = 'Menu';

//     const item4 = document.createElement('li')
//     item4.classList.add('lisitem')
//     item4.innerHTML = 'Contact';

//     ulnav.append(item1,item2,item3,item4);

//     navmain.appendChild(ulnav)
//     return navmain;
// }

// function catchToggle() {
//     document.addEventListener('DOMContentLoaded',(event) => {
//         document.querySelector('.toggle-button').addEventListener('click', () => {
//             document.querySelector('body').classList.toggle('toggled');
//         });
//     });
// };


// export {
//     createNav,
//     catchToggle,
//     createImg,
//     navOptions
// };
const content  = document.getElementById('content')

function head() {
    const header = document.createElement('header');
    const toggleMenu = document.createElement('a')
    toggleMenu.classList.add('toggle-button')

    const togglelist = document.createElement('ul')
    togglelist.classList.add('menu')

    for(let i = 1; i <= 2; i++) {
        const list = document.createElement('li')
        list.classList.add('menu-options')
        togglelist.appendChild(list)
        toggleMenu.appendChild(togglelist)
    }
    header.appendChild(toggleMenu)
    document.body.appendChild(header)
}

function createNav() {
    const nav = document.createElement('nav')
    nav.classList.add('main-nav');
    
    const navul = document.createElement('ul')
    const listArray = ['Home','Menu','About','Contact']
    listArray.forEach(function(item) {
        const navli = document.createElement('li')
        const nava = document.createElement('a')
        nava.href=" ";
        const navspan = document.createElement('span')
        const text = document.createTextNode(item)
        nava.append(navspan,text);
        navli.appendChild(nava);
        navul.appendChild(navli)
    })

    nav.appendChild(navul)
    document.body.appendChild(nav);
}

function readToggle() {
    document.addEventListener('DOMContentLoaded',(event) => {
        document.querySelector('.toggle-button').addEventListener('click', () => {
            document.querySelector('body').classList.toggle('toggled');
        });
    });
};

function backGround() {
    const bg = document.createElement('div')
    bg.classList.add('bg')
    content.appendChild(bg)
}







export {head,
    readToggle,
    createNav,
    backGround
}