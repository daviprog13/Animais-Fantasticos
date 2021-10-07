export default function initiAccordion() {
    const accordionLista = document.querySelectorAll('.js-acordion dt')
    const activeClass = 'ativo';

    function activeAccordion() {
        this.classList.toggle(activeClass)
        this.nextElementSibling.classList.toggle(activeClass)
    }

    if (accordionLista) {
        accordionLista[0].classList.add(activeClass)
        accordionLista[0].nextElementSibling.classList.add(activeClass)

        accordionLista.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }

}