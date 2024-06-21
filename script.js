document.getElementById('show-register-form').addEventListener('click', function() {
    document.getElementById('formulario-cadastro').style.display = 'block';
    document.getElementById('formulario-login').style.display = 'none';
});

// Função para mostrar o formulário de login e ocultar o de cadastro
document.getElementById('show-login-form').addEventListener('click', function() {
    document.getElementById('formulario-login').style.display = 'block';
    document.getElementById('formulario-cadastro').style.display = 'none';
});

// Função de validação dos campos do formulário de cadastro
const validaCadastro = () => {
    let nome = document.getElementById('nome').value;
    let cep = document.getElementById('cep').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (nome === '' || cep === '' || email === '' || senha === '') {
        return false; // Retorna falso se algum campo estiver vazio
    }
    return true; // Retorna verdadeiro se todos os campos estiverem preenchidos
};

const validaLogin = () => {
    let email = document.getElementById('email-login').value;
    let senha = document.getElementById('senha-login').value;

    if (email === '' || senha === '') {
        return false; // Retorna falso se algum campo estiver vazio
    }
    return true; // Retorna verdadeiro se todos os campos estiverem preenchidos
};

// Manipulador de evento para o formulário de cadastro
document.getElementById('form-cadastro').addEventListener("submit", (e) => { 
    // Verifica se todos os campos estão preenchidos corretamente
    if (!validaCadastro()) {
        alert('É obrigatório o preenchimento de todos os campos do Cadastro!');
        e.preventDefault(); // Impede o envio do formulário
    }
});
document.getElementById('form-login').addEventListener("submit", (e) => { 
    // Verifica se todos os campos estão preenchidos corretamente
    if (!validaLogin()) {
        alert('É obrigatório o preenchimento de todos os campos do Login!');
        e.preventDefault(); // Impede o envio do formulário
    }
});