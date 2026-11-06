// قائمة الجوال
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
  });
}

// تحديث سنة حقوق النشر تلقائياً
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// تجهيز رسالة طلب الخدمة وإرسالها إلى واتساب
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const service = document.querySelector('#service').value;
    const message = document.querySelector('#message').value.trim();

    if (!name || !service) {
      alert('فضلاً اكتب اسمك واختر الخدمة المطلوبة.');
      return;
    }

    const text = `مرحباً HusDev، اسمي ${name}.\\nالخدمة المطلوبة: ${service}.\\nتفاصيل المشروع: ${message || 'أرغب بمعرفة التفاصيل.'}`;
    const url = `https://wa.me/966550863785?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}
