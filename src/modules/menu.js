import { navHeader,footer,clickToggle,menuNav } from "./load"
navHeader()
footer()
clickToggle()
menuNav()

const content = document.getElementById('content')

function createMenu() {
    const menupage = document.createElement('div')
    for(let i = i; i <= 4; i++) {
        const menuimage = document.createElement('div')
        menupage.appendChild(menuimage)
    }
    content.appendChild(menupage)
}