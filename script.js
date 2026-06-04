
    // Process form submissions smoothly
    function handleMessageSubmit(event) {
      event.preventDefault();

      const name = document.getElementById('nameInput').value;
      const email = document.getElementById('emailInput').value;
      const message = document.getElementById('messageInput').value;

      console.log("Inquiry Submitted Successfully:", { name, email, message });

      // Display custom responsive success notification block
      const successBox = document.getElementById('contactFormSuccess');
      successBox.classList.remove('hidden');

      // Clear the Form fields safely
      document.getElementById('portfolioForm').reset();

      // Automatically auto-dismiss the message alert block after 5 seconds
      setTimeout(() => {
        successBox.classList.add('hidden');
      }, 5000);
    }

    // Interactive Highlight active link when user scrolls
    document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          if (pageYOffset >= (sectionTop - 180)) {
            currentSectionId = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('text-brand-500', 'font-extrabold');
          link.classList.add('text-slate-600', 'font-semibold');
          if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('text-brand-500', 'font-extrabold');
            link.classList.remove('text-slate-600', 'font-semibold');
          }
        });
      });
    });
  