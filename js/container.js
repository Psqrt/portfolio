
const cards = document.querySelectorAll('.card');

function transition() {
  if (this.classList.contains('active-card')) {
    this.classList.remove('active-card')
  } else {
    this.classList.add('active-card');
  }
}

cards.forEach(card => card.addEventListener('click', transition));
 