// --- Botones de idioma
const esBtn = document.getElementById("es-btn");
const enBtn = document.getElementById("en-btn");

// Elementos con clases por idioma
const esElements = document.querySelectorAll(".lang-es");
const enElements = document.querySelectorAll(".lang-en");

// Elementos con data-es / data-en
const translatables = document.querySelectorAll("[data-es]");

function switchLanguage(lang) {
  esBtn.classList.remove("active");
  enBtn.classList.remove("active");

  if (lang === "es") {
    esBtn.classList.add("active");
    esElements.forEach(el => el.style.display = "inline");
    enElements.forEach(el => el.style.display = "none");
    translatables.forEach(el => {
      el.textContent = el.getAttribute("data-es");
    });
  } else {
    enBtn.classList.add("active");
    esElements.forEach(el => el.style.display = "none");
    enElements.forEach(el => el.style.display = "inline");
    translatables.forEach(el => {
      el.textContent = el.getAttribute("data-en");
    });
  }
}

// Activadores
esBtn.addEventListener("click", () => switchLanguage("es"));
enBtn.addEventListener("click", () => switchLanguage("en"));

// Idioma por defecto
switchLanguage("es");

// --- Menú hamburguesa
const hamburgerIcon = document.getElementById('hamburger');
const overlayMenu = document.getElementById('overlay-menu');
const closeBtn = document.getElementById('close-btn');

hamburgerIcon.addEventListener('click', () => {
  overlayMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  overlayMenu.classList.remove('show');
});

document.querySelectorAll('.overlay-links a').forEach(link => {
  link.addEventListener('click', () => {
    overlayMenu.classList.remove('show');
  });
});

// Modal para visualizar certificados
document.querySelectorAll('.certificates-gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

document.querySelector('.close-modal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target.id === 'modal') {
    document.getElementById('modal').style.display = 'none';
  }
});

const courseCards = document.querySelectorAll('.course-card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDuration = document.getElementById('modal-duration');
const modalDescriptionEs = document.getElementById('modal-description');
const modalDescriptionEn = document.getElementById('modal-description-en');
const closeModal = document.getElementById('close-modal');

courseCards.forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title;
    modalDuration.textContent = card.dataset.duration;
    modalDescriptionEs.textContent = card.dataset.descriptionEs;
    modalDescriptionEn.textContent = card.dataset.descriptionEn;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
// FLIP-CARD en móviles: activa clase 'flipped' con un clic
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
      this.querySelector('.flip-inner').classList.toggle('flipped');
    }
  });
});

// Cierre del modal con botón (ya está en tu script, solo asegúrate que esté al final y no duplicado)
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

