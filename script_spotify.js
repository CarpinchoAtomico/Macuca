function playSong(songName) {
    alert(`🎶 Reproduciendo: ${songName} — Yoni Macuca`);
  }
  let currentPlaying = null;

document.querySelectorAll('.play-btn').forEach(button => {
  button.addEventListener('click', () => {
    const songName = button.getAttribute('data-song');

    // Si ya hay una en reproducción y es la misma → pausa
    if (currentPlaying === button) {
      button.classList.remove('active');
      button.textContent = '▶';
      currentPlaying = null;
      console.log(`⏸ Pausado: ${songName}`);
      return;
    }

    // Si había otra canción sonando → la resetea
    if (currentPlaying) {
      currentPlaying.classList.remove('active');
      currentPlaying.textContent = '▶';
    }

    // Activa el nuevo botón
    button.classList.add('active');
    button.textContent = '⏸';
    currentPlaying = button;

    console.log(`🎶 Reproduciendo: ${songName}`);
  });
});
