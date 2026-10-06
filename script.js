const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.querySelectorAll(".faq-q").forEach((q) => {
  q.addEventListener("click", () => {
    const item = q.parentElement;
    item.classList.toggle("open");
    const icon = q.querySelector("span");
    if (icon) icon.textContent = item.classList.contains("open") ? "−" : "+";
  });
});

function openModal() {
  document.getElementById("auditModal").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("auditModal").classList.remove("show");
  document.body.style.overflow = "";
}

const auditModal = document.getElementById("auditModal");
if (auditModal) {
  auditModal.addEventListener("click", (e) => {
    if (e.target === auditModal) closeModal();
  });
}

function demoSubmit(formId, msgId, label) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById(msgId);
    msg.textContent = label;
    msg.style.color = "#16803c";
    form.reset();
  });
}

demoSubmit(
  "contactForm",
  "formMsg",
  "Thanks! Your request is ready to be connected to your preferred form/email backend."
);

demoSubmit(
  "auditForm",
  "auditMsg",
  "Thanks! Your audit request is ready to be connected to your preferred form/email backend."
);
