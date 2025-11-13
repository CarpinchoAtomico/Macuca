// ===================== CONTRASEÑA INICIAL =====================
const inicioPassword = document.getElementById("inicio-password");
const claveInicial = document.getElementById("clave-inicial");
const btnClaveInicial = document.getElementById("btn-clave-inicial");
const errorInicial = document.getElementById("error-inicial");

// 🧩 Este es tu puzzle real
const puzzle = document.getElementById("puzzle");
const tituloPuzzle = document.getElementById("titulo-puzzle") || null; // por si tenés el h1 "Resuelve el puzzle"
const success = document.getElementById("success") || null;

// Oculta puzzle y título al inicio
if (puzzle) puzzle.style.display = "none";
if (tituloPuzzle) tituloPuzzle.style.display = "none";
if (success) success.style.display = "none";

// Escucha el botón de acceso
btnClaveInicial.addEventListener("click", () => {
  const claveCorrecta = "macuca2025"; // 🔐 cambia esta si querés
  const claveIngresada = claveInicial.value.trim().toLowerCase();

  if (claveIngresada === claveCorrecta) {
    // ✅ Contraseña correcta
    errorInicial.style.display = "none";
    inicioPassword.classList.add("ocultar-password");

    // Después de 1 segundo, oculta la pantalla de login y muestra el puzzle
    setTimeout(() => {
      inicioPassword.style.display = "none";
      if (tituloPuzzle) tituloPuzzle.style.display = "block";
      if (puzzle) puzzle.style.display = "grid"; // o "block", según tu CSS
    }, 1000);
  } else {
    // ❌ Contraseña incorrecta
    errorInicial.textContent = "Contraseña incorrecta";
    errorInicial.style.display = "block";
    claveInicial.value = "";
  }
});

// ===================== ETAPA 1: PUZZLE CON ARRASTRE =====================
const puzzle = document.getElementById("puzzle");
const success = document.getElementById("success");
const contrato = document.getElementById("contrato");
const gridSize = 4; // 4x4 piezas
const totalPiezas = gridSize * gridSize;
let piezas = [];

// Crear puzzle
function crearPuzzle() {
  puzzle.innerHTML = "";
  piezas = [];

  // Crear lista de índices mezclados
  const indices = Array.from({ length: totalPiezas }, (_, i) => i);
  indices.sort(() => Math.random() - 0.5);

  indices.forEach((num) => {
    const div = document.createElement("div");
    div.classList.add("piece");
    div.draggable = true;

    // Posición de fondo
    const x = (num % gridSize) * (-100 / (3 / (gridSize - 1)));
    const y = Math.floor(num / gridSize) * (-100 / (3 / (gridSize - 1)));
    div.style.backgroundPosition = `${x}px ${y}px`;

    // Guardar posición correcta
    div.dataset.correct = num;

    puzzle.appendChild(div);
    piezas.push(div);
  });

  agregarEventosArrastre();
}

function agregarEventosArrastre() {
  piezas.forEach((pieza) => {
    pieza.addEventListener("dragstart", dragStart);
    pieza.addEventListener("dragover", dragOver);
    pieza.addEventListener("dragleave", dragLeave);
    pieza.addEventListener("drop", drop);
    pieza.addEventListener("dragend", dragEnd);
  });
}

let piezaOrigen = null;

function dragStart(e) {
  piezaOrigen = this;
  setTimeout(() => (this.style.opacity = "0.5"), 0);
}

function dragOver(e) {
  e.preventDefault();
  this.classList.add("drag-over");
}

function dragLeave() {
  this.classList.remove("drag-over");
}

function drop() {
  this.classList.remove("drag-over");
  if (this === piezaOrigen) return;

  // Intercambiar nodos en el DOM
  const temp = document.createElement("div");
  puzzle.insertBefore(temp, piezaOrigen);
  puzzle.insertBefore(piezaOrigen, this);
  puzzle.insertBefore(this, temp);
  puzzle.removeChild(temp);

  comprobarGanado();
}

function dragEnd() {
  this.style.opacity = "1";
}

function comprobarGanado() {
  const piezasActuales = [...puzzle.children];
  const correcto = piezasActuales.every(
    (pieza, i) => parseInt(pieza.dataset.correct) === i
  );

  if (correcto) {
    success.style.display = "block";
    setTimeout(() => {
      puzzle.style.display = "none";
      success.style.display = "none";
      contrato.style.display = "block";
    }, 1500);
  }
}

// Iniciar el puzzle
crearPuzzle();


// ===================== ETAPA 2: CONTRASEÑA =====================
function mostrarPassword() {
  document.getElementById("contrato").style.display = "none";
  document.getElementById("passwordScreen").style.display = "block";
}

function verificarPassword() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");
  if (pass.toLowerCase() === "macuca") {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("whatsapp").style.display = "block";
  } else {
    error.style.display = "block";
  }
}


// ===================== ETAPA 3: WHATSAPP =====================
document.getElementById("irPolicialBtn").addEventListener("click", () => {
  document.getElementById("whatsapp").style.display = "none";
  document.getElementById("web-policial").style.display = "block";
});


// ===================== ETAPA 4: WEB POLICIAL =====================
// Navegación principal
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    const target = link.getAttribute("data-target");
    if (target === "inicio") {
      document.getElementById("main-content").style.display = "flex";
      document.getElementById("pistas-screen").style.display = "none";
      document.getElementById("sospechosos-screen").style.display = "none";
      document.getElementById("resultado-correcto").style.display = "none";
      document.getElementById("resultado-incorrecto").style.display = "none";
    } else if (target === "pistas") {
      mostrarPistas();
    }
  });
});


// Botón “Ingresar al caso”
document.querySelector(".iniciar-btn").addEventListener("click", () => {
  document.getElementById("caso-section").style.display = "block";
  document.getElementById("equipo-section").style.display = "none";
});


// Tabs internas (Caso / Equipo)
document.querySelectorAll(".tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    if (btn.dataset.section === "caso") {
      document.getElementById("caso-section").style.display = "block";
      document.getElementById("equipo-section").style.display = "none";
    } else {
      document.getElementById("caso-section").style.display = "none";
      document.getElementById("equipo-section").style.display = "block";
    }
  });
});


// Mostrar Pistas
function mostrarPistas() {
  document.getElementById("main-content").style.display = "none";
  document.getElementById("pistas-screen").style.display = "block";
  document.getElementById("sospechosos-screen").style.display = "none";
  document.getElementById("resultado-correcto").style.display = "none";
  document.getElementById("resultado-incorrecto").style.display = "none";
}

// Botón “Volver” de pistas
document.getElementById("volver-btn").addEventListener("click", () => {
  document.getElementById("pistas-screen").style.display = "none";
  document.getElementById("main-content").style.display = "flex";
});


// Botón “Confirmar asesino”
document.getElementById("confirmar-asesino-btn").addEventListener("click", () => {
  document.getElementById("pistas-screen").style.display = "none";
  document.getElementById("sospechosos-screen").style.display = "block";
});


// Botón “Volver” desde sospechosos
document.getElementById("volver-pistas").addEventListener("click", () => {
  document.getElementById("sospechosos-screen").style.display = "none";
  document.getElementById("pistas-screen").style.display = "block";
});
// Selección de sospechosos
document.querySelectorAll(".nombre-sospechoso").forEach(btn => {
  btn.addEventListener("click", () => {
    const correcto = btn.parentElement.dataset.correct === "true";
    const sospechososScreen = document.getElementById("sospechosos-screen");
    const resultadoCorrecto = document.getElementById("resultado-correcto");
    const resultadoIncorrecto = document.getElementById("resultado-incorrecto");
    const videoSection = document.getElementById("videoFinal");
    const videoIncorrecto = document.getElementById("videoIncorrecto");
    const videoCaptura = document.getElementById("videoCaptura");
    const videoFuga = document.getElementById("videoFuga");

    sospechososScreen.style.display = "none";

    if (correcto) {
      resultadoCorrecto.style.display = "block";
      setTimeout(() => {
        resultadoCorrecto.style.display = "none";
        videoSection.style.display = "block";
        videoCaptura.play();
      }, 2500);

      videoCaptura.onended = () => {
        videoSection.style.display = "none";
        mostrarSello("CASO CERRADO", "red");
      };
    } else {
      resultadoIncorrecto.style.display = "block";
      setTimeout(() => {
        resultadoIncorrecto.style.display = "none";
        videoIncorrecto.style.display = "block";
        videoFuga.play();
      }, 2500);

      videoFuga.onended = () => {
        videoIncorrecto.style.display = "none";
        mostrarSello("CASO NO RESUELTO", "gray");
      };
    }
  });
});

// Función de sello animado + agradecimiento
function mostrarSello(texto, color) {
  const selloFinal = document.getElementById("selloFinal");
  const selloTexto = document.getElementById("sello-texto");
  const agradecimiento = document.getElementById("agradecimientoFinal");

  selloTexto.textContent = texto;
  selloTexto.style.color = color;
  selloTexto.style.borderColor = color;
  selloFinal.style.display = "flex";

  // Sonido de sello
  const selloSound = new Audio("sello.mp3");
  selloSound.volume = 0.6;
  selloSound.play().catch(() => {});

  // Animación del sello
  selloTexto.style.animation = "selloGolpe 0.6s ease-out forwards, glow 1.5s ease-in-out 0.6s infinite";

  // Luego de 3 segundos, mostrar agradecimiento final
  setTimeout(() => {
    selloFinal.style.display = "none";
    agradecimiento.style.display = "flex";
  }, 3000);
}
