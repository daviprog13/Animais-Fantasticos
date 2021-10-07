export default function initiNumeros() {
    function animaNumeros() {
        const numeros = document.querySelectorAll('[data-numero]');

        numeros.forEach((numero) => { //2
            const total = +numero.innerText; //3
            const incremento = Math.floor(total / 100); // 8
            let start = 0; //4
            /*5*/
            const timer = setInterval(() => {
                start += incremento; //8
                numero.innerText = start; // 7
                /*6*/
                if (start > total) {
                    numero.innerText = total; //9
                    clearInterval(timer);
                }
            }, 25 * Math.random()); //10
        });
    }
    let observer;

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animaNumeros();
        }
    }
    observer = new MutationObserver(handleMutation);
    const observeTarget = document.querySelector('.numeros');
    observer.observe(observeTarget, { attributes: true });
}

// 1 selecionar todos os numeros
//2 fazer a repetição
//3 extrair o total
//4- criar um começo 
//5 criar um setinterval para girar os numeros
//6 adicionar a parada se o start que tem o valor de 0 for maior que o numero selecionado então clearInterval para parar  
//7 adiciona isso a pagina
//8 criou um incremento para poder agilizar a contagem de numeros e adicione ela ao elemento start, mas crie o incremento com arredondador math.florr
//9 como o numero nao vai ser exatamente o que escolhemos no html entao vamos colocar esse valor como total
//10 aqui conseguimos brincar com os numeros e fazer com que eles ocorram de maneira diferente */