(function () {

    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const hero = document.querySelector('#hero');

    left.addEventListener('click', () => {

        if (hero.classList.contains('main__hero')) {
            hero.classList.remove('main__hero');
            hero.classList.add('main__hero--2');
        }else if (hero.classList.contains('main__hero--2')){
            hero.classList.remove('main__hero--2');
            hero.classList.add('main__hero--3');
        }else if (hero.classList.contains('main__hero--3')){
            hero.classList.remove('main__hero--3');
            hero.classList.add('main__hero');
        }

    });

    right.addEventListener('click', () => {

        if (hero.classList.contains('main__hero')) {
            hero.classList.remove('main__hero');
            hero.classList.add('main__hero--2');
        }else if (hero.classList.contains('main__hero--2')){
            hero.classList.remove('main__hero--2');
            hero.classList.add('main__hero--3');
        }else if (hero.classList.contains('main__hero--3')){
            hero.classList.remove('main__hero--3');
            hero.classList.add('main__hero');
        }
        
    });












})();