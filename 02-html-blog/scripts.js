document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); //previne a pagina de dar refresh

    const name = form.elements["nome"].value;
    const email = form.elements["email"].value;
    const message = form.elements["mensagem"].value;

    const result = `Nome: ${name}\nE-mail: ${email}\nMessage: ${message}`;
    alert(result);
  });
});
