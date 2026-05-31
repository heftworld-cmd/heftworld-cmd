const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  let frame = null;

  card.addEventListener("pointermove", (event) => {
    if (window.matchMedia("(max-width: 680px)").matches) {
      return;
    }

    if (frame) {
      cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(() => {
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;
      const moveX = ((x - centerX) / centerX) * 10;
      const moveY = ((y - centerY) / centerY) * 10;

      card.style.setProperty("--mx", `${moveX}px`);
      card.style.setProperty("--my", `${moveY}px`);
    });
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--mx", "0px");
    card.style.setProperty("--my", "0px");
  });
});

window.addEventListener("pointermove", (event) => {
  if (window.matchMedia("(max-width: 680px)").matches) {
    return;
  }

  const x = (event.clientX / window.innerWidth - 0.5) * 14;
  const y = (event.clientY / window.innerHeight - 0.5) * 14;
  document.documentElement.style.setProperty("--parallax-x", `${x}px`);
  document.documentElement.style.setProperty("--parallax-y", `${y}px`);
}, { passive: true });
