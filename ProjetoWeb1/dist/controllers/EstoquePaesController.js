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
exports.getQuantidadeById = exports.getAllEstoque = exports.addQuantidadeEstoque = void 0;
const EstoquePaesService = __importStar(require("../services/EstoquePaesService"));
const addQuantidadeEstoque = (req, res) => {
    const { id, quantidade, preco } = req.body;
    if (typeof id !== 'number' || typeof quantidade !== 'number' || typeof preco !== 'number') {
        res.status(400).send('Os campos id, quantidade e preço devem ser números.');
        return;
    }
    try {
        EstoquePaesService.addQuantidadeEstoque(id, quantidade, preco);
        res.send('Quantidade adicionada ao estoque');
    }
    catch (error) {
        res.status(400).send("Id não existente");
    }
};
exports.addQuantidadeEstoque = addQuantidadeEstoque;
const getAllEstoque = (req, res) => {
    const estoque = EstoquePaesService.getAllEstoque();
    res.json(estoque);
};
exports.getAllEstoque = getAllEstoque;
const getQuantidadeById = (req, res) => {
    const id = Number(req.params.id);
    const item = EstoquePaesService.getItemById(id);
    if (item) {
        res.json({ quantidade: item.quantidade, preco: item.preco });
    }
    else {
        res.status(404).send('Item não encontrado no estoque');
    }
};
exports.getQuantidadeById = getQuantidadeById;
