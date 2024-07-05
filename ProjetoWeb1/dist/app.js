"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const modalidadeController = __importStar(require("./controllers/ModalidadePaesController"));
const estoqueController = __importStar(require("./controllers/EstoquePaesController"));
const vendaController = __importStar(require("./controllers/VendaPaesController"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
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
