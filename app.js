const stories = {
  aventura: [
    "Em uma floresta misteriosa, um jovem encontrou um mapa antigo que o guiaria até um tesouro escondido.",
    "Um explorador solitário embarcou em uma viagem perigosa pelo deserto em busca de uma cidade perdida.",
    "No alto das montanhas, um grupo de amigos descobriu uma caverna secreta cheia de símbolos desconhecidos."
  ],
  romance: [
    "Dois estranhos se cruzaram em uma cafeteria e, com um simples olhar, começaram uma história de amor inesquecível.",
    "Durante uma viagem inesperada, ela encontrou alguém que mudou sua forma de ver a vida.",
    "Em meio à correria do trabalho, nasceu um romance silencioso que ninguém poderia imaginar."
  ],
  comedia: [
    "Um cozinheiro atrapalhado tentou impressionar seu chefe, mas acabou servindo sobremesa salgada e sopa doce.",
    "Dois amigos decidiram abrir um negócio de entrega, mas só recebiam pedidos errados e confusos.",
    "Uma festa de aniversário terminou em gargalhadas quando o cachorro roubou o bolo da mesa."
  ]
};

const btnGenerate = document.getElementById("btn-generate");
const btnDownload = document.getElementById("btn-download");
const storyText = document.getElementById("story-text");
const genreSelect = document.getElementById("genre");

btnGenerate.addEventListener("click", () => {
  const genre = genreSelect.value;
  const options = stories[genre] || [];
  if (!options.length) return;

  const randomIndex = Math.floor(Math.random() * options.length);
  storyText.textContent = options[randomIndex];
});

btnDownload.addEventListener("click", () => {
  const text = storyText.textContent.trim();
  if (!text || text === "Clique no botão para gerar uma história.") return;

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "historia.txt";
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(link.href);
  link.remove();
});
