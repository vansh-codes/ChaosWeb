document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('chaos-header');
  const words = header.textContent.split(' ');
  header.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
});
