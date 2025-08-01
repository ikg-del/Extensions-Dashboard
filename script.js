const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button styling
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      const isActive = card.dataset.active === 'true';
      if (
        filter === 'all' ||
        (filter === 'active' && isActive) ||
        (filter === 'inactive' && !isActive)
      ) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Remove card functionality
document.querySelectorAll('.remove-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.card').remove();
  });
});

// Toggle active/inactive and update data-active
document.querySelectorAll('.toggle input[type="checkbox"]').forEach(toggle => {
  toggle.addEventListener('change', () => {
    const card = toggle.closest('.card');
    card.dataset.active = toggle.checked;
  });
});
