const form = document.getElementById('form-validacao');
const numeroB = document.getElementById('numero-b').value;
let formEValido = false;


function bMaiorQueA(numeroA, numeroB) {
    return parseFloat(numeroB) > parseFloat(numeroA);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('numero-a').value;
    const mensagemSucesso = `O número <b>${numeroB}</b> é maior que o número <b>${numeroA}</b>, formulário válido.`


    formEValido = bMaiorQueA(numeroA, numeroB)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        document.getElementById('numero-a').value = '';
        document.getElementById('numero-b').value= '';
    } else {
        document.querySelector('.error-message').style.border = '1px solid '
        document.querySelector('.error-message').style.display = 'block';
    }
});

numeroB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = bMaiorQueA(e.target.value);
    
    if(!formEValido) {
        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});