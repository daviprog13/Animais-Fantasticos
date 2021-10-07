import outsideClick from './outsideClick.js';

export default function initiDropdown() {
    const dropdowns = document.querySelectorAll('[data-dropdown]');

    function handleCLick(event) {
        event.preventDefault();
        this.classList.add('ativo');

        outsideClick(this, ['click', 'touchstart'], () => {
            this.classList.remove('ativo');
        });
    }
    dropdowns.forEach((menu) => {
        ['touchstart', 'click'].forEach(((userMenu) => {
            menu.addEventListener(userMenu, handleCLick);
        }));
    });
}