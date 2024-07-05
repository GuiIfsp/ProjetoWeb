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
const VendaPaesService = __importStar(require("../services/VendaPaesService"));
const realizarVenda = (req, res) => {
    const venda = req.body;
    try {
        const novaVenda = VendaPaesService.realizarVenda(venda);
        res.status(201).json(novaVenda);
    }
    catch (error) {
        res.status(400).send("erro");
    }
};
exports.realizarVenda = realizarVenda;
const getVendaById = (req, res) => {
    const idVenda = req.params.id;
    const venda = VendaPaesService.getVendaById(idVenda);
    if (venda) {
        res.json(venda);
    }
    else {
        res.status(404).send('Venda não encontrada');
    }
};
exports.getVendaById = getVendaById;
