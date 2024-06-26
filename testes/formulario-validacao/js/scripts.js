const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const passowordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome")
        return;
    }

    // Verifica se o e-mail está preenchido e se é válido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email")
        return;
    }

    // Verifica se a senha está preenchida
    if (!validatePassword(passowordInput.value, 8)) {
        alert("A senha precisa ser no mínimo de 8 dígitos.")
        return;
    }

    // Verificar se a situação foi selecionada
    if(jobSelect.value === "") {
        alert("Por favor, selecione a sua situação")
        return;
    }

    // Verificar se a mensagem está preenchida
    if(messageTextarea.value === "") {
        alert("Por favor, escreva uma mensagem")
        return;
    }

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
})

// Função que valida e-mail
function isEmailValid(email) {
    // Cria uma regex para validar email
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        // Senha válida
        return true
    }

    // Senha inválida
    return false
}