document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetSection = document.querySelector(this.getAttribute('href'));

      if (this.getAttribute('href') === '#home') {
        // Redirect to the footer when clicking on "Contact Us"
        const footerSection = document.querySelector('home');
        setTimeout(() => {
            window.location.href = this.getAttribute('href');
          });
        footerSection.scrollIntoView({ behavior: 'smooth' });
      } else if (this.getAttribute('href') === '#offering') {
        // Scroll to the section above the footer when clicking on "About"
        const sectionAboveFooter = document.getElementById('offering').previousElementSibling;
        sectionAboveFooter.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            window.location.href = this.getAttribute('href');
          });
      } else if (this.getAttribute('href') === '#getintouch') {
        // Scroll to the section above the footer when clicking on "Our brands"
        const sectionAboveFooter = document.getElementById('getintouch').previousElementSibling;
        sectionAboveFooter.scrollIntoView({ behavior: 'smooth' });
         setTimeout(() => {
          window.location.href = this.getAttribute('href');
        });
      } else if (this.getAttribute('href') === '#brands') {
        // Scroll to the section above the footer when clicking on "Our brands"
        const sectionAboveFooter = document.getElementById('brands').previousElementSibling;
        sectionAboveFooter.scrollIntoView({ behavior: 'smooth' });
         setTimeout(() => {
          window.location.href = this.getAttribute('href');
        });
      } else if (this.getAttribute('href') === '#newsroom') {
        // Scroll to the section above the footer when clicking on "Our brands"
        const sectionAboveFooter = document.getElementById('newsroom').previousElementSibling;
        sectionAboveFooter.scrollIntoView({ behavior: 'smooth' });
         setTimeout(() => {
          window.location.href = this.getAttribute('href');
        });
      } 
      else if (this.getAttribute('href') === '#ourproducts') {
        // Scroll to the section above the footer when clicking on "Our brands"
        const sectionAboveFooter = document.getElementById('ourproducts').previousElementSibling;
        sectionAboveFooter.scrollIntoView({ behavior: 'smooth' });
         setTimeout(() => {
          window.location.href = this.getAttribute('href');
        });
      } else {
        // Scroll to the target section for all other links
        targetSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            window.location.href = this.getAttribute('href');
          });
      }
    });
  });