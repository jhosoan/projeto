var nem = document.getElementById("faturas");
var num = document.getElementById("nomes");
var resu = document.getElementById("res");
let vator = [];
document.getElementById("lista").style.display = "none";
function cadpessoa(valor, nome) {
  document.getElementById("lista").style.display = "none";
  if (nem.value === "") {
    alert("inserir valor da Fatura!");
    nem.focus();
  } else if (num.value === "") {
    num.focus();
    alert("inserir Nome da fatura!");
  } else {
    var tabela = document.getElementById("tbpessoas");
    var qtdlinha = tabela.rows.length;
    var linha = tabela.insertRow(qtdlinha);
    tabela.style.display = "inline-block";
    var cellvalor = linha.insertCell(0);
    var cellnome = linha.insertCell(1);

    cellvalor.innerHTML = valor;
    cellnome.innerHTML = nome;

    vator.push(num.value);
    resu.innerHTML = ``;
    nem.value = ``;
    num.value = ``;
    nem.focus();
  }
}
function btnfinalizar() {
  if (vator.length === 0) {
    alert("Inserir valor");
  }
  let soma = 0;
  for (let pos in vator) {
    soma -= vator[pos];

    resu.innerHTML = `<p>Valor da divida ${soma}`;
    var tabela = (document.getElementById("tbpessoas").style.display = "none");
    var list = (document.getElementById("lista").style.display =
      "inline-block");
  }
}

function lista() {
  var tabela = (document.getElementById("tbpessoas").style.display =
    "inline-block");
}

nem.focus();
