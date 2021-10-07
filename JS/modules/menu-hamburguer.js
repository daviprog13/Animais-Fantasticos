import outsideClick from './outsideClick.js'; /* 1 */

export default function menuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]'); //2
    const menuList = document.querySelector('[data-menu="list"]'); //2
    const eventos = ['click', 'touchstart']; //7
    function openMenu() {
        [menuList, menuButton].forEach((addClass) => {
            addClass.classList.add('ativo'); // 4
        });
        outsideClick(menuList, eventos, () => {
            [menuList, menuButton].forEach((addClass) => {
                addClass.classList.remove('ativo');
            });
        });
    }
    eventos.forEach((userEvent) => {
        menuButton.addEventListener(userEvent, openMenu); //7
    });
}

// 1 primeira coisa importou o outsideClick
// 2 selecionou o botão e a lista
// 3 criar o evento

/// 4 o que eu quero quando a pessoa apertar o botão, adicionar a classe ativo no menuList
//5 agora vamos remover, usando a função outsideClick passar os parametros menuList como o this ou seja de onde sera removido, os eventos, ou seja na função outside click deve ser feita com os eventos, e colocar a função para remover, 
//6 nao esquecer de adicionar a settimeout na outsideClick
//7 adicionar os eventos