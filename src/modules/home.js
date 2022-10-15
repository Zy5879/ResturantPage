

function createNav() {
    const div = document.createElement('div')
    div.classList.add('nav')
    const p = document.createElement('p')
    p.classList.add('color-TBA');
    p.innerHTML = 'SEAMONSTERS SEAFOOD SHOP'
    const a = document.createElement('a')
    a.classList.add('toggle-button')
    const ul =  document.createElement('ul')
    ul.classList.add('menu')
    const li = document.createElement('li')
    li.classList.add('menu-options')
    const li2 = document.createElement('li')
    li2.classList.add('menu-options')
    ul.append(li,li2)
    a.appendChild(ul);
    
    p.appendChild(a)
    div.append(p,a)
    return div;


}


function createImg() {
   const imgDiv = document.createElement('div')
   imgDiv.classList.add('bg-img')
   return imgDiv;
}

function navOptions() {
    const navmain = document.createElement('nav');
    navmain.classList.add('main-nav')
    
    const ulnav = document.createElement('ul')
    ulnav.classList.add('nav-options')

    const item1 = document.createElement('li')
    item1.classList.add('lisitem')
    item1.innerHTML = 'Home';

    const item2 = document.createElement('li')
    item2.innerHTML = 'About';
    item2.classList.add('lisitem')

    const item3 = document.createElement('li')
    item3.classList.add('lisitem')
    item3.innerHTML = 'Menu';

    const item4 = document.createElement('li')
    item4.classList.add('lisitem')
    item4.innerHTML = 'Contact';

    ulnav.append(item1,item2,item3,item4);

    navmain.appendChild(ulnav)
    return navmain;
}

function catchToggle() {
    document.addEventListener('DOMContentLoaded',(event) => {
        document.querySelector('.toggle-button').addEventListener('click', () => {
            document.querySelector('body').classList.toggle('toggled');
        });
    });
};


export {
    createNav,
    catchToggle,
    createImg,
    navOptions
};