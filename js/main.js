// Mechly - Form handling for Netlify Forms
(function() {
  'use strict';

  document.querySelectorAll('form[data-netlify="true"]').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var formData = new FormData(form);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then(function() {
        form.classList.add('is-submitted');
      })
      .catch(function(error) {
        console.error('Form submission error:', error);
        alert('Something went wrong. Please try again.');
      });
    });
  });
})();
