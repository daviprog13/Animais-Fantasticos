export default function initiModal() {
    const abrir = document.querySelector('[data-modal="abrir"]');
    const fechar = document.querySelector('[data-modal="fechar"]');
    const modal = document.querySelector('[data-modal="container"]');

    function abrirModal(event) {
        event.preventDefault();
        modal.classList.add('ativo');
    }

    function fecharModal() {
        modal.classList.remove('ativo');
    }

    function fecharFora(event) {
        if (event.target === this) {
            this.classList.remove('ativo');
        }
    }

    abrir.addEventListener('click', abrirModal);
    fechar.addEventListener('click', fecharModal);
    modal.addEventListener('click', fecharFora);
}