// 1. Story cards: tap (or press Enter/Space) to flip and see the lesson
document.querySelectorAll(".flip").forEach((card) => {
  card.addEventListener("click", () => {
    const flipped = card.getAttribute("aria-pressed") === "true";
    card.setAttribute("aria-pressed", String(!flipped));
  });
});

// 2. Highlight the number of the section you are reading
const navLinks = document.querySelectorAll(".dots a");
const sections = document.querySelectorAll("#q1, #q2, #q3, #q4");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { threshold: 0.5 });
  sections.forEach((s) => observer.observe(s));
}
