import { VendaPaes } from '../models/VendaPaes';
import * as EstoquePaesService from './EstoquePaesService';
import * as ModalidadePaesService from './ModalidadePaesService';

let vendas: VendaPaes[] = [];

export const realizarVenda = (venda: VendaPaes): VendaPaes => {
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

function calcularValorTotal(itens: { idModalidade: number; quantidade: number }[]): number {
    let total = 0;
    for (const item of itens) {
        const estoqueItem = EstoquePaesService.getItemById(item.idModalidade);
        if (estoqueItem) {
            total += estoqueItem.preco * item.quantidade;
        } else {
            throw new Error(`Modalidade com ID ${item.idModalidade} não encontrada no estoque.`);
        }
    }
    return total;
}

export const getVendaById = (idVenda: string): VendaPaes | undefined => {
    return vendas.find(venda => venda.idVenda === idVenda);
};
