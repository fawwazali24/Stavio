(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false);
  });

  //star rating logic

  const stars = document.querySelectorAll('.rating-container i');
  const ratingInput = document.getElementById('ratingValue');

  stars.forEach((star, index) => {
    // Hover effect
    star.addEventListener('mouseover', () => {
      stars.forEach((s, i) => {
        if (i <= index) s.style.color = 'gold';
        else s.style.color = '#ccc';
      });
    });

    // Remove hover effect when not hovering
    star.addEventListener('mouseout', () => {
      const rating = ratingInput.value;
      stars.forEach((s, i) => {
        if (i < rating) s.style.color = 'gold';
        else s.style.color = '#ccc';
      });
    });

    // Click to select rating
    star.addEventListener('click', () => {
      const rating = index + 1;
      ratingInput.value = rating;
      stars.forEach((s, i) => {
        if (i < rating) s.classList.add('selected');
        else s.classList.remove('selected');
      });
    });
  });

    const splash = document.getElementById("splash");
    const app = document.getElementById("app");

    // Check visit status
    const visited = localStorage.getItem("stavio_visited");

    if (!visited) {
      // First visit — show splash for animation duration
      setTimeout(() => {
        splash.classList.add("hidden");
        app.classList.add("show");
        localStorage.setItem("stavio_visited", "true");
      }, 3200); // matches progress animation time
    } else {
      splash.style.display = "none";
      app.classList.add("show");
    }


})()


