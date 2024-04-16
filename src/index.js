/*
TESTE DE MESA LÓGICA 

1- Quando o usuário clicar no botão de mostrar mais, deve abrir os projetos que estão escondidos no html

    1.1 - Pegar o botão mostrar mais no js para poder verificar quando o usuário clicar em cima dela 
    1.2 - Identificar  o clique do usuário
    1.3 Adicionar a classe "ativo" nos projetos escondidos 

2 - Esconder o botão mostrar mais 
    1- pegar o botão e esconder ele


*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
console.log (botaoMostrarProjetos);
botaoMostrarProjetos.addEventListener('click',()=>{
    console.log('teste');
})

