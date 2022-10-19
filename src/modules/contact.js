const main = document.getElementById('main-body')

function contactInfo() {
    const contactinfo = document.createElement('div')
    contactinfo.classList.add('contact')
    const address = document.createElement('h3')
    address.classList.add('addy')
    address.textContent = 'ADDRESS'
    const location = document.createElement('p')
    location.classList.add('send')
    location.textContent = 'LOCATIONS TBD'
    const phone = document.createElement('h3')
    phone.textContent  = 'PHONE'
    const number = document.createElement('p')
    number.textContent = '000-000-0000'
    const email = document.createElement('h3')
    email.textContent = 'EMAIL'
    const gmail = document.createElement('p')
    gmail.textContent = 'ZaireM21@gmail.com'

    address.appendChild(location)
    phone.appendChild(number)
    email.appendChild(gmail)

    contactinfo.append(address,phone,email)
    main.appendChild(contactinfo)
}

const contactBtn = document.querySelector('.contact').addEventListener('click', () => {
    const contactcontent = document.getElementById('main-body')
    // contactcontent.classList.add('flex')
    while(contactcontent.firstChild) {
        contactcontent.removeChild(contactcontent.firstChild);
    }
    contactInfo()
})
