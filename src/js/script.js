import Card from './index';

window.addEventListener('DOMContentLoaded', () => {
    const fuagra = new Card('Нямушка', 'c фуа-гра', 0.5, false);
    const fish = new Card('Нямушка', 'c рыбой', 2, false);
    const chicken = new Card('Нямушка', 'c курой', 5, true);

    fuagra.render();
    fish.render();
    chicken.render();
});