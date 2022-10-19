import { funcMain } from "./load"

const homeBtn = document.querySelector('.home').addEventListener('click', () => {
    const homecontent = document.querySelector('.main-body')
    while(homecontent.firstChild) {
        homecontent.remove(homecontent.firstChild)
    }
    funcMain()
})


