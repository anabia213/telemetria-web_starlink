function mostrarSubtexto(elemento) {
  // Encontra o próximo elemento irmão do tipo td com a classe 'subtexto'
  var subtexto = elemento.parentNode.querySelector('.subtexto');
  // Alterna a exibição do subtexto
  if (subtexto.style.display === "none") {
    subtexto.style.display = "table-cell";
  } else {
    subtexto.style.display = "none";
  }
}
function searchTable() {
  var input, filter, table, tr, tdId, tdNome, i, txtValueId, txtValueNome;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabela");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    tdId = tr[i].getElementsByTagName("td")[0]; // Coluna ID
    tdNome = tr[i].getElementsByTagName("td")[1]; // Coluna Nome de Alerta
    if (tdId && tdNome) {
      txtValueId = tdId.textContent || tdId.innerText;
      txtValueNome = tdNome.textContent || tdNome.innerText;
      if (txtValueId.toUpperCase().indexOf(filter) > -1 || txtValueNome.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
