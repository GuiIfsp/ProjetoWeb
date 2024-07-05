import express from 'express';
import bodyParser from 'body-parser';
import * as modalidadeController from './controllers/ModalidadePaesController';
import * as estoqueController from './controllers/EstoquePaesController';
import * as vendaController from './controllers/VendaPaesController';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/modalidades/todas', modalidadeController.getAllModalidades);
app.get('/api/modalidades/:id', modalidadeController.getItemById);
app.post('/api/modalidades', modalidadeController.saveModalidade);
app.delete('/api/modalidades/:id', modalidadeController.deleteModalidade);

app.post('/api/estoque', estoqueController.addQuantidadeEstoque);
app.get('/api/estoque/todos', estoqueController.getAllEstoque);
app.get('/api/estoque/:id', estoqueController.getQuantidadeById);

app.post('/api/venda', vendaController.realizarVenda);
app.get('/api/venda/:id', vendaController.getVendaById);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
