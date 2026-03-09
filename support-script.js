// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all FAQ items
    faqItems.forEach(faq => {
      faq.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Contact Form Handler
const contactForm = document.querySelector('.contact-form');
const submitBtn = contactForm.querySelector('.submit-btn');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    category: document.getElementById('category').value,
    message: document.getElementById('message').value
  };
  
  // Disable button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    // Show success message
    showSuccessMessage();
    
    // Reset form
    contactForm.reset();
    
    // Re-enable button
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }, 1500);
});

function showSuccessMessage() {
  // Check if success message exists, if not create it
  let successMessage = document.querySelector('.success-message');
  
  if (!successMessage) {
    successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
      <strong>✓ Message Sent Successfully!</strong>
      <p>Thank you for contacting us. We'll get back to you within 24-48 hours.</p>
    `;
    contactForm.appendChild(successMessage);
  }
  
  // Show the message
  successMessage.classList.add('show');
  
  // Hide after 5 seconds
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 5000);
}

// Form Validation
const formInputs = contactForm.querySelectorAll('input, select, textarea');

formInputs.forEach(input => {
  input.addEventListener('blur', () => {
    validateField(input);
  });
  
  input.addEventListener('input', () => {
    if (input.classList.contains('error')) {
      validateField(input);
    }
  });
});

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  
  // Remove existing error
  removeError(field);
  
  // Check if required field is empty
  if (field.hasAttribute('required') && !value) {
    showError(field, 'This field is required');
    isValid = false;
  }
  
  // Validate email
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showError(field, 'Please enter a valid email address');
      isValid = false;
    }
  }
  
  // Validate message length
  if (field.name === 'message' && value && value.length < 10) {
    showError(field, 'Message must be at least 10 characters long');
    isValid = false;
  }
  
  return isValid;
}

function showError(field, message) {
  field.classList.add('error');
  field.style.borderColor = '#ff6b35';
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.color = '#ff6b35';
  errorDiv.style.fontSize = '0.9rem';
  errorDiv.style.marginTop = '0.5rem';
  errorDiv.textContent = message;
  
  field.parentElement.appendChild(errorDiv);
}

function removeError(field) {
  field.classList.remove('error');
  field.style.borderColor = '';
  
  const errorMessage = field.parentElement.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }
}

// Smooth scroll to contact form when clicking support buttons
const supportButtons = document.querySelectorAll('a[href="#contact-form"]');
supportButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-form');
    const offsetTop = contactSection.offsetTop - 100;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});