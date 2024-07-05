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
exports.getItemById = exports.getAllEstoque = exports.removerQuantidadeEstoque = exports.addQuantidadeEstoque = void 0;
const ModalidadePaesService = __importStar(require("./ModalidadePaesService"));
let estoque = [];
const addQuantidadeEstoque = (id, quantidade, preco) => {
    const modalidadeExistente = ModalidadePaesService.getModalidadeById(id);
    if (!modalidadeExistente) {
        throw new Error(`Não foi possível encontrar uma modalidade com o ID ${id}.`);
    }
    const index = estoque.findIndex(item => item.id === id);
    if (index !== -1) {
        estoque[index].quantidade += quantidade;
        estoque[index].preco = preco;
    }
    else {
        estoque.push({ id, quantidade, preco });
    }
};
exports.addQuantidadeEstoque = addQuantidadeEstoque;
const removerQuantidadeEstoque = (id, quantidadeVendida) => {
    const index = estoque.findIndex(item => item.id === id);
    if (index !== -1) {
        if (estoque[index].quantidade >= quantidadeVendida) {
            estoque[index].quantidade -= quantidadeVendida;
        }
        else {
            throw new Error(`Quantidade insuficiente em estoque para a modalidade com ID ${id}.`);
        }
    }
    else {
        throw new Error(`Item com ID ${id} não encontrado no estoque.`);
    }
};
exports.removerQuantidadeEstoque = removerQuantidadeEstoque;
const getAllEstoque = () => {
    return estoque;
};
exports.getAllEstoque = getAllEstoque;
const getItemById = (id) => {
    return estoque.find(item => item.id === id);
};
exports.getItemById = getItemById;
