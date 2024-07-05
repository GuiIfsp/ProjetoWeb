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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVendaById = exports.realizarVenda = void 0;
const EstoquePaesService = __importStar(require("./EstoquePaesService"));
const ModalidadePaesService = __importStar(require("./ModalidadePaesService"));
let vendas = [];
const realizarVenda = (venda) => {
    venda.idVenda = Math.random().toString(36).substr(2, 9);
    venda.valorTotal = calcularValorTotal(venda.itens);
    for (const item of venda.itens) {
        const modalidadeExistente = ModalidadePaesService.getModalidadeById(item.idModalidade);
        if (!modalidadeExistente) {
            throw new Error(`Modalidade com ID ${item.idModalidade} não encontrada.`);
        }
        const estoqueItem = EstoquePaesService.getItemById(item.idModalidade);
        if (!estoqueItem || estoqueItem.quantidade < item.quantidade) {
            throw new Error(`Estoque insuficiente para a modalidade com ID ${item.idModalidade}.`);
        }
        EstoquePaesService.removerQuantidadeEstoque(item.idModalidade, item.quantidade);
    }
    vendas.push(venda);
    return venda;
};
exports.realizarVenda = realizarVenda;
function calcularValorTotal(itens) {
    let total = 0;
    for (const item of itens) {
        const estoqueItem = EstoquePaesService.getItemById(item.idModalidade);
        if (estoqueItem) {
            total += estoqueItem.preco * item.quantidade;
        }
        else {
            throw new Error(`Modalidade com ID ${item.idModalidade} não encontrada no estoque.`);
        }
    }
    return total;
}
const getVendaById = (idVenda) => {
    return vendas.find(venda => venda.idVenda === idVenda);
};
exports.getVendaById = getVendaById;
