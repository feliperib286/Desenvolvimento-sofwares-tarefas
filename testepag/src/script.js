// Simulação de credenciais válidas
const validUsername = "usuario";
const validPassword = "senha123";

// Respostas corretas das perguntas
const correctAnswers = {
    q1: 'a', // Resposta correta para a pergunta 1
    q2: 'a', // Resposta correta para a pergunta 2
    q3: 'a'  // Resposta correta para a pergunta 3
};

// Obtém os elementos do DOM
const loginButton = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');
const evaluationSection = document.getElementById('evaluationSection');
const submitLogin = document.getElementById('submitLogin');
const loginError = document.getElementById('loginError');
const submitAnswersButton = document.getElementById('submitAnswers');
const resultMessage = document.getElementById('resultMessage');

// Exibe o formulário de login quando o botão de login é clicado
loginButton.addEventListener('click', function () {
    loginForm.style.display = 'block'; // Exibe o formulário
    loginButton.style.display = 'none'; // Esconde o botão de login
});

// Verifica o login quando o usuário clica no botão "Entrar"
submitLogin.addEventListener('click', function () {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Verifica se as credenciais estão corretas
    if (usernameInput === validUsername && passwordInput === validPassword) {
        evaluationSection.style.display = 'block'; // Exibe a avaliação
        loginForm.style.display = 'none'; // Esconde o formulário de login
        loginButton.style.display = 'none'; // Esconde o botão de login
    } else {
        loginError.style.display = 'block'; // Exibe mensagem de erro
    }
});

// Verifica as respostas do usuário quando ele clica em "Enviar Respostas"
submitAnswersButton.addEventListener('click', function () {
    let correctCount = 0;

    // Obtém as respostas selecionadas pelo usuário
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : null,
        q2: document.querySelector('input[name="q2"]:checked') ? document.querySelector('input[name="q2"]:checked').value : null,
        q3: document.querySelector('input[name="q3"]:checked') ? document.querySelector('input[name="q3"]:checked').value : null
    };

    // Verifica cada resposta e conta quantas estão corretas
    for (let question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            correctCount++;
        }
    }

    // Calcula a porcentagem de acertos
    const scorePercentage = (correctCount / Object.keys(correctAnswers).length) * 100;

    // Exibe a mensagem de resultado
    if (scorePercentage >= 80) {
        resultMessage.textContent = `Parabéns! Você acertou ${correctCount} de 3 perguntas (${scorePercentage.toFixed(0)}%). Você passou!`;
    } else {
        resultMessage.textContent = `Você acertou ${correctCount} de 3 perguntas (${scorePercentage.toFixed(0)} %). Tente novamente.`;
    }

    resultMessage.style.display = 'block'; // Exibe a mensagem de resultado
});
