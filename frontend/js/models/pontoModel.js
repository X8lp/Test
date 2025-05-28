export class PontoModel {
  constructor() {
    this.pontos = [];
  }

  adicionar(ponto) {
    this.pontos.push(ponto);
  }

  listar() {
    return this.pontos;
  }
}