
// Variáveis para armazenar os nomes, ordens e classes dos animais
let nomesAnimais = [];
let ordemAnimais = [];
let classeAnimais = [];

function exibirCadastro(event) {
  event.preventDefault(); // Impede o envio do formulário para recarregar a página
  
  // Captura os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const ordem = document.getElementById('ordem').value;
  const classe = document.getElementById('classe').value;
  
  // Adiciona os dados nas listas correspondentes
  nomesAnimais.push(nome);
  ordemAnimais.push(ordem);
  classeAnimais.push(classe);

  // Cria uma string com os dados separados por vírgulas
  const nomesConcatenados = nomesAnimais.join(', ');
  const ordensConcatenados = ordemAnimais.join(', ');
  const classesConcatenadas = classeAnimais.join(', ');

  // Exibe os dados na página (nomes, ordens e classes)
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
    <p><strong>Animais:</strong> ${nomesConcatenados}</p>
    <p><strong>Ordens:</strong> ${ordensConcatenados}</p>
    <p><strong>Classes:</strong> ${classesConcatenadas}</p>
  `;
}
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Animais</title>
</head>
<body>
    <h1>Cadastre seus animais:</h1>
    <form id="CadAnimais">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required><br><br>

        <label for="ordem">Ordem:</label>
        <input type="text" id="ordem" name="ordem" required><br><br>

        <label for="classe">Classe:</label>
        <select id="classe" name="classe" required>
            <option value="mamifero">Mamífero</option>
            <option value="reptil">Reptil</option>
            <option value="anfibio">Anfibio</option>
            <option value="ave">Ave</option>
            <option value="peixe">Peixe</option>
        </select>

        <input type="submit" value="CADASTRAR">
        <input type="submit" value="APAGAR">

    </form>

<h2>Animais Cadastrados</h2>
    <ul id="listaAnimais"></ul>
    <script>
        document.getElementById('CadAnimais').addEventListener('submit', function(event) {
           event.preventDefault(); // impede o recarregamento da página
           
           const nome = document.getElementById('nome').value.trim();
           const ordem = document.getElementById('ordem').value.trim();
           const classe = document.getElementById('classe').value;
           
           if(nome && ordem && classe)
            {
                const li = document.createElement('li')
                li.textContent=`Nome: ${nome}, Ordem: ${ordem}, Classe: ${classe}`
                document.getElementById('listaAnimais').appendChild(li);
            }
            else
            {
                alert('Conferir o preenchimento de todos os campos!!!')
            }
        });
    </script>
</body>
</html>*/