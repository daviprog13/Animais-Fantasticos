export default function initiTooltip() {

}

const tooltips = document.querySelectorAll('[data-tooltip]');

function criarTooltipBox(element) {
    const tooltip = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltip.classList.add('tooltip');
    tooltip.innerText = text;
    document.body.appendChild(tooltip);
    return tooltip;
}

function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    function onMouseMove(event) {
        tooltipBox.style.left = `${event.pageX + 20}px`;
        tooltipBox.style.top = `${event.pageY + 20}px`;
    }

    function onMouseLeave() {
        tooltipBox.remove();
        tooltipBox.removeEventListener('mouseover', onMouseOver);
        this.removeEventListener('mousemove', onMouseMove);
    }
    this.addEventListener('mouseleave', onMouseLeave);

    this.addEventListener('mousemove', onMouseMove);
}
tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
});