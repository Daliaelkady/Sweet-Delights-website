// Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
  
  // Order form submission handler
  const orderForm = document.getElementById('orderForm');
  const orderMessage = document.getElementById('orderMessage');
  
  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = orderForm.name.value.trim();
    const email = orderForm.email.value.trim();
    const dessert = orderForm.dessert.value;
    const quantity = orderForm.quantity.value;
  
    if (!name || !email || !dessert || !quantity) {
      orderMessage.textContent = 'Please fill out all required fields.';
      orderMessage.style.color = '#d65a8e';
      return;
    }
  
    orderMessage.style.color = '#4b2e2e';
    orderMessage.textContent = `Thank you, ${name}! Your order for ${quantity} "${dessert}" is received. We'll contact you shortly.`;
  
    orderForm.reset();
  });
  
  // Testimonials slider logic
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  let currentTestimonial = 0;
  
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === index);
    });
  }
  
  prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
  
  nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
  
  // Auto slide every 7 seconds
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 7000);
  
  // Contact form submission handler
  const contactForm = document.getElementById('contactForm');
  const contactMessageStatus = document.getElementById('contactMessageStatus');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = contactForm.contactName.value.trim();
    const email = contactForm.contactEmail.value.trim();
    const message = contactForm.contactMessage.value.trim();
  
    if (!name || !email || !message) {
      contactMessageStatus.textContent = 'Please fill out all required fields.';
      contactMessageStatus.style.color = '#d65a8e';
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      contactMessageStatus.textContent = 'Please enter a valid email address.';
      contactMessageStatus.style.color = '#d65a8e';
      return;
    }
  
    contactMessageStatus.style.color = '#4b2e2e';
    contactMessageStatus.textContent = `Thank you, ${name}! Your message has been sent.`;
  
    contactForm.reset();
  });
  
  // Animate sections on scroll
  const sections = document.querySelectorAll('.animate-section');
  
  function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
  
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealSections);
  window.addEventListener('load', revealSections);
  