"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteModalidade = exports.listModalidades = exports.createModalidade = exports.getAllModalidades = void 0;
const ModalidadePaesService_1 = __importDefault(require("../service/ModalidadePaesService"));
const getAllModalidades = (req, res) => {
    const modalidades = ModalidadePaesService_1.default.getAllModalidades();
    res.json(modalidades);
};
exports.getAllModalidades = getAllModalidades;
const createModalidade = (req, res) => {
    const { id, nome, preco, vegano } = req.body;
    if (!id || !nome || !preco || typeof vegano !== 'boolean') {
        res.status(400).json({ mensagem: 'Todos os campos são obrigatórios: id, nome, preco, vegano.' });
        return;
    }
    const result = ModalidadePaesService_1.default.createModalidade(id, nome, preco, vegano);
    if (typeof result === 'string') {
        res.status(400).json({ mensagem: result });
    }
    else {
        res.status(201).json(result);
    }
};
exports.createModalidade = createModalidade;
const listModalidades = (req, res) => {
    const modalidades = ModalidadePaesService_1.default.getAllModalidades();
    const listaModalidades = modalidades.map(modalidade => ({
        nome: modalidade.nome,
        vegano: modalidade.vegano
    }));
    res.json(listaModalidades);
};
exports.listModalidades = listModalidades;
const deleteModalidade = (req, res) => {
    const { id } = req.params;
    const sucesso = ModalidadePaesService_1.default.deleteModalidade(Number(id));
    if (sucesso) {
        res.status(200).json({ mensagem: 'Modalidade apagada com sucesso.' });
    }
    else {
        res.status(404).json({ mensagem: 'Modalidade não encontrada.' });
    }
};
exports.deleteModalidade = deleteModalidade;
