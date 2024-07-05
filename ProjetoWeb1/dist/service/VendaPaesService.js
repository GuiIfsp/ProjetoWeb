"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VendaPaesRepository_1 = __importDefault(require("../repository/VendaPaesRepository"));
const EstoquePaesService_1 = __importDefault(require("./EstoquePaesService"));
const getAllVendas = () => {
    return VendaPaesRepository_1.default.getAll();
};
const createVenda = (cpfCliente, itens) => {
    const venda = {
        cpfCliente,
        valorTotal: 0,
        itens
    };
    for (const item of venda.itens) {
        const estoqueItem = EstoquePaesService_1.default.getEstoque().find(e => e.modalidadeId === item.modalidadeId);
        if (!estoqueItem || estoqueItem.quantidade < item.quantidade) {
            return `Estoque insuficiente para o item com ID ${item.modalidadeId}`;
        }
    }
    venda.itens.forEach(item => {
        const estoqueItem = EstoquePaesService_1.default.getEstoque().find(e => e.modalidadeId === item.modalidadeId);
        if (estoqueItem) {
            estoqueItem.quantidade -= item.quantidade;
            venda.valorTotal = item.valor * item.quantidade;
        }
    });
    return VendaPaesRepository_1.default.create(venda);
};
exports.default = {
    getAllVendas,
    createVenda
};
