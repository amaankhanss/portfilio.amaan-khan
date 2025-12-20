// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
new Typed("#typed", {
  strings: ["Aman Khan", "Front-End Developer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
  
});

// new Typed("#typed-sub", {
//   strings: ["Front-End Developer", "Web Designer"],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true
// });


const eduBars = document.querySelectorAll(".progress-fill");

const eduObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const value = entry.target.dataset.progress;
        entry.target.style.width = value + "%";
      }
    });
  },
  { threshold: 0.6 }
);

eduBars.forEach(bar => eduObserver.observe(bar));

const bars = document.querySelectorAll(".level-progress");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width =
          entry.target.dataset.level + "%";
      }
    });
  },
  { threshold: 0.6 }
);

bars.forEach(bar => observer.observe(bar));


