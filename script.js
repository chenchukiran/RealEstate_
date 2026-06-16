const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    document.body.style.overflow =
        navLinks.classList.contains("active") ? "hidden" : "auto";
});


/* FAQ PREMIUM INTERACTION */

const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(197,154,92,0.10),
        #ffffff 45%
      )
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "#ffffff";
  });

});




/* =========================
   CTA PARALLAX EFFECT
========================= */

const ctaSection = document.querySelector(".money-cta");

ctaSection.addEventListener("mousemove", (e) => {

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.querySelector(".blur-1").style.transform =
    `translate(${x * 40}px, ${y * 40}px)`;

  document.querySelector(".blur-2").style.transform =
    `translate(-${x * 40}px, -${y * 40}px)`;

});




/* =========================
   FOOTER PREMIUM EFFECTS
========================= */

/* FLOATING GLOW */

const footer = document.querySelector(".ultra-footer");

footer.addEventListener("mousemove", (e) => {

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.querySelector(".glow-1").style.transform =
    `translate(${x * 40}px, ${y * 40}px)`;

  document.querySelector(".glow-2").style.transform =
    `translate(-${x * 40}px, -${y * 40}px)`;

});

/* SCROLL TOP */

const scrollBtn = document.querySelector(".scroll-top");

scrollBtn.addEventListener("click", (e) => {

  e.preventDefault();

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

/* STATS COUNTER */

const counters = document.querySelectorAll(".stat-card h4");

counters.forEach(counter => {

  const update = () => {

    const target = counter.innerText;

    if(target.includes("300")){

      counter.innerText = "₹300Cr+";

    }

    if(target.includes("12")){

      counter.innerText = "12K+";

    }

  };

  update();

});





/* =========================
   PREMIUM LOADER SYSTEM
========================= */

window.addEventListener("load", () => {

  const loader = document.getElementById("ultraLoader");

  setTimeout(() => {

    loader.classList.add("hide");

    /* REMOVE AFTER ANIMATION */

    setTimeout(() => {

      loader.style.display = "none";

    },1200);

  },3500);

});

/* DYNAMIC LOADING TEXT */

const loadingTexts = [

  "Loading Experience...",
  "Initializing Assets...",
  "Securing Investment Network...",
  "Launching Premium Interface...",
  "Preparing Dashboard..."

];

const loadingText = document.querySelector(".loading-text");

let index = 0;

setInterval(() => {

  index++;

  if(index >= loadingTexts.length){
    index = 0;
  }

  loadingText.innerText = loadingTexts[index];

},700);