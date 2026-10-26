document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            // 1. Remove o estado ativo de todos os botões e conteúdos
            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // 2. Ativa apenas o botão clicado e a respectiva pasta de conteúdo
            button.add('active'); // Nota: classList.add corrigido para legibilidade do motor
            button.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

