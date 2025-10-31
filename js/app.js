// ==============================
// MENU HAMBÚRGUER RESPONSIVO
// ==============================
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('nav ul.menu');

menuHamburguer.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// ==============================
// VALIDAÇÃO DO FORMULÁRIO DE CADASTRO
// ==============================
const formCadastro = document.getElementById('form-cadastro');

if (formCadastro) {
  formCadastro.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita envio real para teste

    // Captura valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const projeto = document.getElementById('projeto').value;

    // Validação simples
    if (!nome || !email || !telefone || !projeto) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você poderia enviar os dados para um servidor
    alert(`Cadastro enviado com sucesso!\nNome: ${nome}\nEmail: ${email}\nProjeto: ${projeto}`);

    // Limpa formulário
    formCadastro.reset();
  });
}
