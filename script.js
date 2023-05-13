// Define as cores exibidas na tela e armazena num array
var colors = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
    '#FFA500', '#800080', '#008000', '#FFC0CB', '#800000', '#FFFFF0',
    '#FFD700', '#808080', '#008080', '#FF4500', '#800000', '#ADD8E6'
];

// Criação das variáveis, de exibição na tela e evento de clique no botão   
var colorDisplay = document.getElementById('colorDisplay');
var changeColorBtn = document.getElementById('changeColorBtn');

// Função que escolhe uma cor da array de forma Random e envia para tela
function changeColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    var selectedColor = colors[randomIndex];

    document.body.style.backgroundColor = selectedColor;
    colorDisplay.textContent = "Background-Color: " + selectedColor;
}

// Definir uma cor inicial ao carregar a página
window.addEventListener('DOMContentLoaded', function () {
    changeColor();
});

// Botão com evento de alteração na tela
changeColorBtn.addEventListener('click', changeColor);