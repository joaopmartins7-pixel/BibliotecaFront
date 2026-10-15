const botao = document.getElementById("btn-cadastro");
function dispararAlerta(event) {
    event.preventDefault(); 

   const tituloDoLivro = document.getElementById("titulo").value;  
    
    const mensagem = document.getElementById("mensagemConfirmacao");
    mensagem.innerText = `O livro "${tituloDoLivro}" foi cadastrado com sucesso!`;
    mensagem.style.display = 'block';
}

botao.addEventListener('click', dispararAlerta);