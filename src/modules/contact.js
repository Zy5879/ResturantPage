const main = document.querySelector('.main-body')

function contactInfo() {
    const contactinfo = document.createElement('div')
    contactinfo.classList.add('contact')
    const address = document.createElement('h3')
    address.classList.add('addy')
    address.textContent = 'ADDRESS'
    const location = document.createElement('p')
    location.classList.add('send')
    location.textContent = 'N/A'
    // const phone = document.createElement('h3')
    // const number = document.createElement('p')
    // const email = document.createElement('h3')
    // const gmail = document.createElement('p')

    contactinfo.append(address,location)
    main.appendChild(contactinfo)
}

const contactBtn = document.querySelector('.contact').addEventListener('click', () => {
    const contactcontent = document.querySelector('.main-body')
    while(contactcontent.firstChild) {
        contactcontent.removeChild(contactcontent.firstChild);
    }
    contactInfo()
})
