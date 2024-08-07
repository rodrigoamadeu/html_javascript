const form = document.getElementById('form-validacao');

function bMaiorQueA(numeroA, numeroB) {
    return parseFloat(numeroB) > parseFloat(numeroA);
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const numeroA = document.getElementById('numero-a').value;
    const numeroB = document.getElementById('numero-b').value;
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
