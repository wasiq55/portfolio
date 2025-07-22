document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click",function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth"});

    });
});

// navbar scroll effect

window.addEventListener('scroll',() => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
        navbar.style.backgroundColor = 'rgba(10,10,10,0.98)':
        navbar.style.backgroundColor = 'rgba(10,10,10,0.95)';
})

// Sticky Navbar
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Active Link Highlight
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-link");
    }
  });
});

// Scroll Reveal Animation (Fade-in)
const revealElements = document.querySelectorAll(".skill-card, .hero-content");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3,
});

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});

