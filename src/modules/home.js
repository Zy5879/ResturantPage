

function createNav() {
    const div = document.createElement('div')
    div.classList.add('nav')
    const p = document.createElement('p')
    p.classList.add('color-TBA');
    p.innerHTML = 'SeaMonsters SeaFood Shop'
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
    
    div.append(p,a)
    return div
}


export {
    createNav,
//     createUl
};