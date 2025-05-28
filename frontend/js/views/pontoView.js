export class PontoView {
  constructor(elementoLista) {
    this.lista = elementoLista;
  }

  renderizar(pontos) {
    this.lista.innerHTML = '';
    pontos.forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.nome} - ${p.endereco} (${p.tipo})`;
      this.lista.appendChild(li);
    });
  }
}