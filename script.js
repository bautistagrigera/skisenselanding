document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los elementos con la clase "animate-on-scroll"
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
  
    // Configura el Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Agrega la clase "visible" cuando el elemento es visible
          }
        });
      },
      { threshold: 0.1 } // Se activa cuando el 10% del elemento es visible
    );
  
    // Observa cada elemento animado
    animatedElements.forEach((el) => observer.observe(el));
  });