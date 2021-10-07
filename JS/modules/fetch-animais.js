import animaNumeros from './animaNumeros.js';

export default function fetchAnimais() {
    function createAnimals(animais) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animais.specie}</h3><span>${animais.total}</span>`;
        return div;
    }

    async function fehcAnimais(url) {
        const responseAnimais = await fetch(url);
        const JSONanimais = await responseAnimais.json();
        const numerosGrid = document.querySelector('.numeros-grid');

        JSONanimais.forEach((animais) => {
            const divAnimal = createAnimals(animais);
            numerosGrid.appendChild(divAnimal);
        });
        animaNumeros();
    }

    fehcAnimais('../JSON/animaisapi.json');
}

/* const animais = fetch('../JSON/animaisapi.json')
animais.then(r => r.text())
    .then(animal => [
        console.log(animal)
    ]) */