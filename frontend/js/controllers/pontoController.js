import { PontoModel } from '../models/pontoModel.js';
import { PontoView } from '../views/pontoView.js';

const model = new PontoModel();
const view = new PontoView(document.getElementById('listaPontos'));

document.getElementById('formPonto').addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const endereco = document.getElementById('endereco').value;
  const tipo = document.getElementById('tipo').value;

  model.adicionar({ nome, endereco, tipo });
  view.renderizar(model.listar());

  event.target.reset();
});