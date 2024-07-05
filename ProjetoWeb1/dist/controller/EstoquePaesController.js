"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEstoque = exports.getEstoque = void 0;
const EstoquePaesService_1 = __importDefault(require("../service/EstoquePaesService"));
const getEstoque = (req, res) => {
    const estoque = EstoquePaesService_1.default.getEstoque();
    res.json(estoque);
};
exports.getEstoque = getEstoque;
const updateEstoque = (req, res) => {
    const { modalidadeId, quantidade } = req.body;
    if (modalidadeId === undefined || quantidade === undefined) {
        res.status(400).json({ mensagem: 'modalidadeId e quantidade são obrigatórios.' });
        return;
    }
    const estoqueAtualizado = EstoquePaesService_1.default.updateEstoque(modalidadeId, quantidade);
    res.json(estoqueAtualizado);
};
exports.updateEstoque = updateEstoque;
