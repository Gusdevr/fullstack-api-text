const apiUrl = "http://localhost:3000/api/textos";

async function cadastrarTexto() {
  const conteudo = document.getElementById("texto").value;

  await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ conteudo }),
  });

  document.getElementById("texto").value = "";
  listarTextos();
}

async function listarTextos() {
  const res = await fetch(apiUrl);
  const textos = await res.json();

  const lista = document.getElementById("listaTextos");
  lista.innerHTML = "";

  textos.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t.conteudo;
    lista.appendChild(li);
  });
}

listarTextos();
