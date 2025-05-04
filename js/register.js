document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Registration functionality is not implemented in this demo.");
    });
  }
});
