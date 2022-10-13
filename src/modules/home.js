

function createNav() {
    const div = document.createElement('div')
    div.innerHTML = 'SeaMonsters SeaFood Shop'
    return div;
}

function createUl() {
    const a = document.createElement('a')
    const ul =  document.createElement('ul')
    const li = document.createElement('li')
    const li2 = document.createElement('li')
    ul.append(li,li2)
    a.appendChild(ul);
    return a;
}

export {
    createNav,
    createUl
};