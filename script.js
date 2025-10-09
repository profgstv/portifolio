/*
    Script para criação dinâmica dos cards de projetos, modais de detalhes, badges de tecnologias e badges de comunidades.
    Autor: Gustavo Dal Farra Miguel Jorge
    Data: 2025-10-09
*/
//Objetos, Arrays e Variáveis
const projectsList = {
    projectName: ["Recomendador de Digimons", "Bem vindos ao Egito", "Monalisa no P5.js", "Jogo da Nave no P5.js", "Sorteador de Palavras", "Jogo do Pong no P5.js", "Rádio Inovação CIEBP", "Simulador de Coordenadas", "Scratch Giratório no P5.js", "Digimon Card Battle", "Jogo do Pong no Scratch", "Salve o Planeta no Scratch", "Carrinho de Drift", "Carrinho de Eixo", "Tupã-cera", "Taça de Vinho com Micro:bit", "Ponteiros de LED com Micro:bit", "Shooters com Micro:bit", "Red Alert com GitHub Pages"],
    src: ["./img/proj-p5-digimon.png", "./img/proj-p5-egito.png", "./img/proj-p5-monalisa.png", "./img/proj-p5-nave-desvio.png", "./img/proj-p5-palavra.png", "./img/proj-p5-pong.png", "./img/proj-p5-radio.png", "./img/proj-p5-sim-coord-controle-drift.png", "./img/proj-p5-spinning-scratch.png", "./img/proj-scratch-digimon-card-battle.png", "./img/proj-scratch-pong.png", "./img/proj-scratch-salve-o-planeta.png", "./img/proj-tinkercad-carrinho-drift.png", "./img/proj-tinkercad-carrinho-eixo.png", "./img/proj-github-ciebp-minimal.png", "./img/proj-makecode-wineglass.png", "./img/proj-makecode-radio-pointers.png", "./img/proj-makecode-radio-shooters.png", "./img/proj-github-red-alert.png"],
    alt: ["Imagem do Recomendador de Digimon no P5.js.", "Imagem do Projeto Bem vindo ao Egito no P5.js.", "Imagem do Projeto da Mona Lisa no P5.js.", "Imagem do Jogo da Nave no P5.js.", "Imagem do Sorteador de Palavra no P5.js.", "Imagem do Jogo do Pong no P5.js.", "Imagem do Projeto Rádio Inovação CIEBP.", "Imagem do Simulador de Coordenadas para acelerômetro no P5.js.", "Imagem do Scratch Giratório no P5.js.", "Imagem Jogo Digimon Card Battle no Scratch.", "Imagem do Jogo do Pong no Scratch.", "Imagem do Jogo Salve o Planeta.", "Imagem do projeto do carrinho de Drift.", "Imagem do projeto do carrinho com eixo.", "Imagem do tema ciebp-minimal do Tupã-cera.", "Imagem do projeto da taça de vinho com Micro:bit.", "Imagem do projeto dos ponteiros de LED com Micro:bit.", "Imagem do projeto de Shooters de LED com Micro:bit", "Imagem do site Red Alert hospedado no GitHub Pages."],
    modalID: ["modal001", "modal002", "modal003", "modal004", "modal005", "modal006", "modal007", "modal008", "modal009", "modal010", "modal011", "modal012", "modal013", "modal014", "modal015", "modal016", "modal017", "modal018", "modal019"],
    basicDescription: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ","Carrinho movido por meio de Drift com 4 motores DC.", "Carrinho feito com materiais não estruturados para utilização com eixo de servo motor e movimentação com motor DC.", "Console de Jogos Educativos e Projetos de Programação feito com Batocera Linux e tema ciebp-minimal.", "Taça de vinho com iluminação dos LEDs padrões do Micro:bit e sensor de acelerômetro.", "Ponteiros de LED controlados por Acelerômetro e Rádio Frequência com Micro:bit.", "Interação entre dois ou mais Micro:Bits em estilo de jogo de Shooters.", "Projeto de site Red Alert hospedado no GitHub Pages."],
    description0: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ","Carrinho motorizado movido por meio de Drift. Possui espaço para acoplagem da Shield Robotbit da Kittenbot para Micro:bit, Sensores de Linha com Infravermelho modelo Grove, Sensores Ultrassônicos v2.0 e Sensores RGB TCS3200.", "Carrinho de eixo, montado sobre uma base retangular de acrílico reutilizado, com rodas de tampinhas de leite brancas, motor DC para movimentação e um eixo central movido por um servo motor construído com um canudo plástico e um palito de bambu que permite a rotação.", "Projeto de console de jogos educativos e projetos de programação, feito com Batocera Linux, que é um sistema operacional de código aberto focado em emulação de jogos retrô. O console utiliza o tema ciebp-minimal, desenvolvido no CIEBP Ângelo Mendes, que oferece uma interface limpa e intuitiva para navegação entre os jogos e projetos.", "Projeto de taça de vinho com iluminação dos LEDs padrões do Micro:bit e sensor de acelerômetro para detectar o esvaziamento da taça ao virar.", "Projeto de ponteiros de LED controlados por Acelerômetro e Rádio Frequência com Micro:bit. O projeto utiliza dois Micro:bits, um como transmissor e outro como receptor, para controlar os ponteiros de LED com base na inclinação do transmissor.", "Projeto de interação entre dois ou mais Micro:Bits em estilo de jogo de Shooters, onde os jogadores podem atirar uns nos outros utilizando LEDs e sensores de movimento.", "Projeto de site Red Alert hospedado no GitHub Pages, para introdução ao ecossistema e aos conceitos básicos de desenvolvimento web, utilizando HTML e CSS."],
    description1: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ","Pode ser montado e desmontado de diversas formas, utilizando programações também diversas.", "Sobre a base podem ser utilizados diversos microcontroladores. Nesse projeto é utilizado o Micro:bit com a Shield Robotbit da Kittenbot e configurado um controle remoto com outro Micro:bit por rádio frequência e acelerômetro.", "O tema ciebp-minimal foi projetado para ser simples e eficiente, facilitando a navegação e a seleção de jogos. Ele apresenta um design minimalista, com foco na funcionalidade e na experiência do usuário, com a paleta de cores do CIEBP e jogos com temáticas ou abordagens criativas/educacionais.", "A iluminação dos LEDs na taça de vinho pode ser programada para responder a diferentes movimentos, criando efeitos visuais interessantes.", "O Micro:bit transmissor utiliza o sensor de acelerômetro para detectar a inclinação e envia os dados para o Micro:bit receptor via rádio frequência. O Micro:bit receptor então controla os ponteiros de LED com base nos dados recebidos, permitindo que os ponteiros se movam de acordo com a inclinação do transmissor.", "O jogo pode ser utilizado para ensinar conceitos básicos de programação, eletrônica e comunicação sem fio, além de promover a interação social entre os jogadores.", "O site Red Alert pode ser acessado através do link fornecido, onde é possível explorar o conteúdo e aprender mais sobre desenvolvimento web."],
    description2: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    link0: ["https://editor.p5js.org/gustavodal/sketches/kz7fL2tDb", "https://editor.p5js.org/gustavodal/sketches/qTJDQoaKi", "https://editor.p5js.org/gustavodal/sketches/QXvpZovlZ", "https://editor.p5js.org/gustavodal/sketches/6RbxdTuLY", "https://editor.p5js.org/gustavodal/sketches/OSxJst87c", "https://editor.p5js.org/gustavodal/sketches/-HbSqY4om", "https://editor.p5js.org/gustavodal/sketches/08-tT-q5H", "https://editor.p5js.org/gustavodal/sketches/ZtqfcN_1j", "https://editor.p5js.org/gustavodal/sketches/NLQ8hj56q", "https://scratch.mit.edu/projects/1075392584/", "https://scratch.mit.edu/projects/1059549889/", "https://scratch.mit.edu/projects/1162238548/", "https://www.tinkercad.com/things/huxaQpIZsmd-robo-drift-shield-robotbit-microbit", "https://www.tinkercad.com/things/6tjgtFD3odC-carrinho-de-material-nao-estruturado-com-eixo","https://github.com/profgstv/ciebp-minimal", "https://makecode.microbit.org/S39116-67680-86141-77929", "https://makecode.microbit.org/S07919-41941-17286-44914", "https://makecode.microbit.org/S74200-62926-55799-70958", "https://profgstv.github.io/Red-Alert"],
    linkName0: ["Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no Scratch", "Projeto no Scratch", "Projeto no Scratch","Protótipo no Tinkercad", "Protótipo no Tinkercad", "Repositório do tema ciebp-minimal no GitHub", "Projeto no MakeCode", "Projeto no MakeCode", "Projeto no MakeCode", "Página do Projeto no GitHub Pages"],
    link1: [" ", " ", " ", " ", " ", " ", " ","https://editor.p5js.org/gustavodal/sketches/_vy5DUZ8o", "https://scratch.mit.edu/projects/1140165261/", " ", " ", " ","https://profgstv.github.io/microbit-carrinho-de-drift-com-controle-analgico/", "https://github.com/profgstv/microbit-carrinho-de-controle-analogico-com-eixo", " ", "https://profgstv.github.io/microbit-wine-glass", "https://profgstv.github.io/microbit-led-pointers", "https://profgstv.github.io/shooters", "https://github.com/profgstv/Red-Alert"],
    linkName1: [" ", " ", " ", " ", " ", " ", " ", " ","Projeto no Scratch", " ", " ", " ","Programação com Controle Remoto Analógico", "Programação com Controle por Acelerômetro", " ", "Página do Projeto no GitHub Pages", "Página do Projeto no GitHub Pages", "Página do Projeto no GitHub Pages", "Repositório do Projeto no GitHub"],
    link2: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    linkName2: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    link3: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    linkName3: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    link4: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    linkName4: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
}

const techsList = ["Linux", "JavaScript", "C++", "Python", "HTML", "CSS", "Scratch", "Arduino", "Micro:bit", "MakeCode"];

const communitiesList = {
    "GitHub": "https://github.com/profgstv",
    "P5.js": "https://editor.p5js.org/gustavodal/sketches",
    "Scratch": "https://scratch.mit.edu/users/profgstv/",
    "Tinkercad": "https://www.tinkercad.com/users/fCvRHkvJnfc"
}

const randomizedProjects = projectsList.projectName.toSorted(() => Math.random() - 0.5);
const randomizedTechs = techsList.toSorted(() => Math.random() - 0.5);
const randomizedCommunities = Object.keys(communitiesList).toSorted(() => Math.random() - 0.5);

const parentElement = document.body;
const referenceElement = document.getElementById("reference");


function createCard(a) {
    let i = projectsList.projectName.indexOf(randomizedProjects[a]);

    let cards = document.getElementById("projectsCards");
    let cardDiv0 = document.createElement("div");
    let cardDiv1 = document.createElement("div");
    let cardDiv2 = document.createElement("div");
    let cardImg = document.createElement("img");
    let cardName = document.createElement("h5");
    let cardDescription = document.createElement("p");
    let cardButton = document.createElement("button");

    cards.appendChild(cardDiv0);

    cardDiv0.setAttribute("class", "col-md-4");
    cardDiv0.appendChild(cardDiv1);

    cardDiv1.setAttribute("class", "card");
    cardDiv1.setAttribute("style", "width: 18rem;");
    cardDiv1.appendChild(cardImg);
    cardDiv1.appendChild(cardDiv2);
    
    cardImg.setAttribute("src", projectsList.src[i]);
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("alt", projectsList.alt[i]);
    cardImg.setAttribute("data-bs-toggle", "modal");
    cardImg.setAttribute("data-bs-target", "#" + projectsList.modalID[i]);

    cardDiv2.setAttribute("class", "card-body");
    cardDiv2.appendChild(cardName);
    cardDiv2.appendChild(cardDescription);
    cardDiv2.appendChild(cardButton);

    cardName.setAttribute("class", "card-title local-wine");
    cardName.innerHTML = projectsList.projectName[i];

    cardDescription.setAttribute("class", "card-text local-wine");
    cardDescription.innerHTML = projectsList.basicDescription[i];
    
    cardButton.setAttribute("type", "button");
    cardButton.setAttribute("class", "btn-link");
    cardButton.setAttribute("data-bs-toggle", "modal");
    cardButton.setAttribute("data-bs-target", "#" + projectsList.modalID[i]);
    cardButton.innerHTML = "Detalhes";
}
function createModal(a) {
    let i = projectsList.projectName.indexOf(randomizedProjects[a]);

    let modalDiv0 = document.createElement("div");
    let modalDiv1 = document.createElement("div");
    let modalDiv2 = document.createElement("div");
    let modalDiv3 = document.createElement("div");
    let modalDiv4 = document.createElement("div");
    let modalDiv5 = document.createElement("div");
    let modalName = document.createElement("h5");
    let modalCloseButton = document.createElement("button");
    let modalDescription0 = document.createElement("p");
    let modalDescription1 = document.createElement("p");
    let modalDescription2 = document.createElement("p");
    let modalImg = document.createElement("img");
    let modalLink0 = document.createElement("a");
    let modalLink1 = document.createElement("a");
    let modalLink2 = document.createElement("a");
    let modalLink3 = document.createElement("a");
    let modalLink4 = document.createElement("a");

    parentElement.insertBefore(modalDiv0, referenceElement);

    modalDiv0.setAttribute("class", "modal");
    modalDiv0.setAttribute("id", projectsList.modalID[i]);
    modalDiv0.setAttribute("tabindex", "-1");
    modalDiv0.appendChild(modalDiv1);

    modalDiv1.setAttribute("class", "modal-dialog");
    modalDiv1.appendChild(modalDiv2);
    
    modalDiv2.setAttribute("class", "modal-content");
    modalDiv2.appendChild(modalDiv3);

    modalDiv3.setAttribute("class", "modal-header");
    modalDiv3.appendChild(modalName);
    modalDiv3.appendChild(modalCloseButton);

    modalName.setAttribute("class", "modal-title");
    modalName.innerHTML = projectsList.projectName[i];

    modalCloseButton.setAttribute("type", "button");
    modalCloseButton.setAttribute("class", "btn-close");
    modalCloseButton.setAttribute("data-bs-dismiss", "modal");
    modalCloseButton.setAttribute("aria-label", "Close");
    modalDiv2.appendChild(modalDiv4);

    
    modalDiv4.setAttribute("class", "modal-body");
    modalDiv4.appendChild(modalDescription0);
    modalDescription0.innerHTML = projectsList.description0[i];
    if(projectsList.description1[i] != " ") {
        modalDiv4.appendChild(modalDescription1);
        modalDescription1.innerHTML = "<br>" + projectsList.description1[i];
    }
    if(projectsList.description2[i] != " ") {
        modalDiv4.appendChild(modalDescription2);
        modalDescription2.innerHTML = "<br>" + projectsList.description2[i];
    }
    modalDiv4.appendChild(modalImg);

    modalImg.setAttribute("src", projectsList.src[i]);
    modalImg.setAttribute("class", "img-fluid w-100");
    modalImg.setAttribute("alt", projectsList.alt[i]);

    modalDiv2.appendChild(modalDiv5);
    modalDiv5.setAttribute("class", "modal-footer");
    modalDiv5.appendChild(modalLink0);
    modalLink0.setAttribute("href", projectsList.link0[i]);
    modalLink0.innerHTML = projectsList.linkName0[i];
    if(projectsList.linkName1[i] !== " ") {
        modalDiv5.appendChild(modalLink1);
        modalLink1.setAttribute("href", projectsList.link1[i]);
        modalLink1.innerHTML = "<br>" + projectsList.linkName1[i];
    }
    if(projectsList.linkName2[i] !== " ") {
        modalDiv5.appendChild(modalLink2);
        modalLink2.setAttribute("href", projectsList.link2[i]);
        modalLink2.innerHTML = "<br>" + projectsList.linkName2[i];
    }
    if(projectsList.linkName3[i] !== " ") {
        modalDiv5.appendChild(modalLink3);
        modalLink3.setAttribute("href", projectsList.link3[i]);
        modalLink3.innerHTML = "<br>" + projectsList.linkName3[i];
    }
    if(projectsList.linkName4[i] !== " ") {
        modalDiv5.appendChild(modalLink4);
        modalLink4.setAttribute("href", projectsList.link4[i]);
        modalLink4.innerHTML = "<br>" + projectsList.linkName4[i];
    }

}

for(let i in projectsList.projectName) {;
    createCard(i);
    createModal(i);
}
for(let i in randomizedTechs) {
    let techs = document.getElementById("techBadges");
    let techButton = document.createElement("button");
    techs.appendChild(techButton);
    techButton.setAttribute("class", "badge local-link");
    techButton.innerHTML = randomizedTechs[i];
}
for(let i in randomizedCommunities) {
    let communityURL = communitiesList[randomizedCommunities[i]];
    let communities = document.getElementById("communitiesBadges");
    let communityLink = document.createElement("a");
    let communityButton = document.createElement("button");
    communities.appendChild(communityLink);
    communityLink.setAttribute("href", communityURL);
    communityLink.appendChild(communityButton);
    communityButton.setAttribute("class", "badge local-link");
    communityButton.innerHTML = randomizedCommunities[i];
}