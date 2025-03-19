# Landing Page - Escola de Tecnologia DNC

Este é um projeto de landing page desenvolvido para a Escola de Tecnologia DNC. A página apresenta informações sobre a escola e permite que os usuários preencham um formulário, cujos dados são enviados para a API da Sheet Monkey.

## 🚀 Tecnologias Utilizadas

- **HTML** → Estruturação da página
- **CSS** → Estilização e responsividade
- **JavaScript** → Interatividade e manipulação do carrossel
- **API Sheet Monkey** → Captura e armazenamento de informações do formulário

## 📌 Funcionalidades

- Exibição de depoimentos de alunos (carrossel interativo)
- Formulário para cadastro de informações
- Integração com a **Sheet Monkey API** para armazenamento de:
  - Nome
  - Email
  - Data
  - Telefone

## 💒 Estrutura do Projeto

```
📦 landing-page-dnc
├── 📂 assets              # Imagens, ícones e outros arquivos estáticos
├── 📂 css                 # Arquivos de estilos CSS
├── 📂 js                  # Scripts JavaScript
├── 📜 index.html          # Página principal
├── 📜 README.md           # Documentação do projeto
```

## 🛠️ Como Executar o Projeto

1. **Clone o repositório**:
   ```sh
   git clone https://github.com/seu-usuario/landing-page-dnc.git
   ```
2. **Acesse a pasta do projeto**:
   ```sh
   cd landing-page-dnc
   ```
3. **Abra o arquivo `index.html` no navegador**
   - Você pode simplesmente abrir o arquivo diretamente ou utilizar a extensão **Live Server** no VS Code para uma experiência melhor.

## 📩 Integração com a API Sheet Monkey

O formulário da landing page está configurado para enviar os seguintes dados à API da Sheet Monkey:

- `Name`
- `Email`
- `Date`
- `Phone`

### Exemplo de Configuração no JavaScript:

```js
const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    fetch("https://api.sheetmonkey.io/form/seu-endpoint", {
        method: "POST",
        body: data,
    })
    .then(response => alert("Cadastro realizado com sucesso!"))
    .catch(error => alert("Erro ao enviar o formulário."));
});
```

## 📞 Contato

Caso tenha dúvidas ou sugestões, entre em contato: 

📧 Email: [seuemail@exemplo.com](mailto:seuemail@exemplo.com)

---

**Feito com ❤️ por Samuel Enderson**

