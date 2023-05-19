(function () {

    const hamburger = document.querySelector('#hamburger');
    const links = document.querySelector('#links');

    // const link = document.querySelector('.main__link');
    const list = document.querySelector('.main__list');
    const list2 = document.querySelector('.main__list--2');
    const list3 = document.querySelector('.main__list--3');
    const list4 = document.querySelector('.main__list--4');
    const list5 = document.querySelector('.main__list--5');


    hamburger.addEventListener('click', () => {
        links.classList.toggle('main__links--show');
    });

    list.addEventListener('click', () => {
        links.classList.remove('main__links--show');
    });

    list2.addEventListener('click', () => {
        links.classList.remove('main__links--show');
    });

    list3.addEventListener('click', () => {
        links.classList.remove('main__links--show');
    });

    list4.addEventListener('click', () => {
        links.classList.remove('main__links--show');
    });

    list5.addEventListener('click', () => {
        links.classList.remove('main__links--show');
    });

})();