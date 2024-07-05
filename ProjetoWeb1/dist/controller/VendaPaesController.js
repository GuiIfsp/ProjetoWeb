"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVenda = exports.getAllVendas = void 0;
const VendaPaesService_1 = __importDefault(require("../service/VendaPaesService"));
// Função para obter todas as vendas de pães
const getAllVendas = (req, res) => {
    const vendas = VendaPaesService_1.default.getAllVendas();
    res.json(vendas);
};
exports.getAllVendas = getAllVendas;
// Função para criar uma nova venda de pães
const createVenda = (req, res) => {
    const { cpfCliente, itens } = req.body;
    // Verifica se todos os campos necessários estão presentes
    if (!cpfCliente || !itens || !Array.isArray(itens)) {
        res.status(400).json({ mensagem: 'Todos os campos são obrigatórios: cpfCliente (string), itens (array).' });
        return;
    }
    const result = VendaPaesService_1.default.createVenda(cpfCliente, itens);
    // Verifica se houve algum erro na criação da venda
    if (typeof result === 'string') {
        res.status(400).json({ mensagem: result });
    }
    else {
        res.status(201).json(result);
    }
};
exports.createVenda = createVenda;
