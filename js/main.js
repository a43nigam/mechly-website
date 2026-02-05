// Mechly
(function() {
  'use strict';

  // Clock
  var clock = document.getElementById('clock');

  function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var mins = now.getMinutes().toString().padStart(2, '0');
    var secs = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = hours + ':' + mins + ':' + secs;
  }

  updateClock();
  setInterval(updateClock, 1000);

  // Form handling for Netlify Forms
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
