export default function initiScrollSuave() {
    const liksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        /*  //forma alternativa
         const topo = section.offsetTop;
          window.scrollTo({
             top: topo,
             behavior: 'smooth',
         }) */
    }
    liksInternos.forEach((link) => {
        link.addEventListener('click', scrollSection);
    });
}