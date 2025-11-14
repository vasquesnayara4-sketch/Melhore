const mensagens = [
    "Você está chata, melhore por favor",
    "Ninguém é obrigado a suportar essa chatisse!",
    "Pequenos passos também são progresso, então comece a ser mais agradável.",
    "Vc entrou essa pessoa e ficou insuportável",
    " Você já chegou até aqui, não irrite o grupo. Tenha senso!",
    "Melhorar é um caminho, não um destino!"
];

function novaMensagem() {
    const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById("mensagem").textContent = msg;
}
