export default function initnimationScroll() {
    const section = document.querySelectorAll('.js-scroll');
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
        section.forEach((sections) => {
            const sectionTop = sections.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if (isSectionVisible) {
                sections.classList.add('ativo');
            } else if (sections.classList.contains('ativo')) {
                sections.classList.remove('ativo');
            }
        });
    }
    if (section.length) {
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}