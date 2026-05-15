const CONTACT_EMAIL = 'idannahum34@gmail.com';

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.getElementById('leadForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get('name') || '';
  const role = data.get('role') || '';
  const goal = data.get('goal') || '';
  const subject = `בקשה לבניית Prooffolio עבור ${name}`;
  const body = `היי,\n\nאני רוצה לבנות דף Prooffolio.\n\nשם: ${name}\nתחום: ${role}\nמטרה: ${goal}\n\nתודה.`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
