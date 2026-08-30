// ===================================================================
// ZEIDAN — PORTFOLIO SCRIPT
// Handles: mobile nav toggle, footer year, and contact form validation.
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  setupNavToggle();
  setupContactForm();
});

/* ---------- Footer year ---------- */
function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ---------- Mobile nav toggle ---------- */
function setupNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the menu after a link is tapped (mobile UX)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Contact form validation ---------- */
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const statusEl = document.getElementById("formStatus");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isNameValid = validateField(
      nameInput,
      (value) => value.trim().length >= 2,
      "Please enter your name (at least 2 characters)."
    );

    const isEmailValid = validateField(
      emailInput,
      (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      "Please enter a valid email address."
    );

    const isMessageValid = validateField(
      messageInput,
      (value) => value.trim().length >= 10,
      "Your message should be at least 10 characters."
    );

    if (isNameValid && isEmailValid && isMessageValid) {
      // NOTE: This form does not send data anywhere yet.
      // To actually deliver messages, connect it to a backend or a
      // service like Formspree, EmailJS, or Netlify Forms, then
      // replace this block with the real submit call.
      statusEl.textContent = "Thanks! Your message looks good and is ready to send once this form is connected to a backend or a service like Formspree/EmailJS.";
      form.reset();
    } else {
      statusEl.textContent = "";
    }
  });

  // Re-validate a field as the user fixes it
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("input", () => clearError(input));
  });
}

function validateField(input, isValid, errorMessage) {
  const field = input.closest(".field");
  const errorEl = document.getElementById(input.id + "Error");
  const valid = isValid(input.value);

  if (valid) {
    clearError(input);
  } else {
    field.classList.add("has-error");
    if (errorEl) errorEl.textContent = errorMessage;
  }
  return valid;
}

function clearError(input) {
  const field = input.closest(".field");
  const errorEl = document.getElementById(input.id + "Error");
  field.classList.remove("has-error");
  if (errorEl) errorEl.textContent = "";
}
