const main = document.querySelector('.main-body')

function funcNewMain() {
    const mainh1 = document.createElement('h2')
    mainh1.classList.add('about')
    mainh1.textContent = 'ABOUT'
    const mainp = document.createElement('p')
    mainp.classList.add('lorem')
    mainp.textContent = 'Lorem ipsum, dolor  amet consectetur adipisicing elit. Dolores, delectus ut. Temporibus consequatur nostrum, culpa quam laudantium enim tenetur tempore aliquid animi esse praesentium aperiam aut dicta facilis quae officiis molestias sit itaque, sapiente ducimus nemo? Molestiae voluptatum at sunt.';
    main.append(mainh1,mainp)
}

const homeBtn = document.querySelector('.home').addEventListener('click', () => {
    const homecontent = document.querySelector('.main-body')
    while(homecontent.firstChild) {
        homecontent.removeChild(homecontent.firstChild);
    }
    funcNewMain()
});

