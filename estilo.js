const senha = document.getElementById("aparecer");
const bt$ = document.getElementById("botao");
bt$.addEventListener("click", () => {
  var n = document.getElementById("Cpf");
  var se = document.getElementById("senha");
  var c = "49399442802";
  var senha = "7462";
  if (n.value === c && se.value === senha) {
    window.location.href = "faturamento.html";
    n.value = ``;
    se.value = ``;
    n.focus();
  } else {
    alert("Por favor, verifique se os dados inseridos estão certos");
    n.value = ``;
    se.value = ``;
    n.focus();
  }
});
senha.addEventListener("click", () => {
  if (senha.type === "password") {
    senha.type = "text";
  }
});
