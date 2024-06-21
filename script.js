document.getElementById('show-register-form').addEventListener('click', function() {
    document.getElementById('formulario-cadastro').style.display = 'block';
    document.getElementById('formulario-login').style.display = 'none';
});

document.getElementById('show-login-form').addEventListener('click', function() {
    document.getElementById('formulario-login').style.display = 'block';
    document.getElementById('formulario-cadastro').style.display = 'none';
});


const validaCadastro = () => {
    let nome = document.getElementById('nome').value;
    let cep = document.getElementById('cep').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (nome === '' || cep === '' || email === '' || senha === '') {
        return false;
    }
    return true;
};

const validaLogin = () => {
    let email = document.getElementById('email-login').value;
    let senha = document.getElementById('senha-login').value;

    if (email === '' || senha === '') {
        return false;
    }
    return true;
};


document.getElementById('form-cadastro').addEventListener("submit", (e) => { 

    if (!validaCadastro()) {
        alert('É obrigatório o preenchimento de todos os campos do Cadastro!');
        e.preventDefault();
    }
});
document.getElementById('form-login').addEventListener("submit", (e) => { 
    
    if (!validaLogin()) {
        alert('É obrigatório o preenchimento de todos os campos do Login!');
        e.preventDefault();
    }
});