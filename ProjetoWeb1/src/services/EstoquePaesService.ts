import { EstoquePaes } from '../models/EstoquePaes';
import * as ModalidadePaesService from './ModalidadePaesService';

let estoque: EstoquePaes[] = [];

export const addQuantidadeEstoque = (id: number, quantidade: number, preco: number): void => {
    const modalidadeExistente = ModalidadePaesService.getModalidadeById(id);
    if (!modalidadeExistente) {
        throw new Error(`Não foi possível encontrar uma modalidade com o ID ${id}.`);
    }

    const index = estoque.findIndex(item => item.id === id);
    if (index !== -1) {
        estoque[index].quantidade += quantidade;
        estoque[index].preco = preco;
    } else {
        estoque.push({ id, quantidade, preco });
    }
};

export const removerQuantidadeEstoque = (id: number, quantidadeVendida: number): void => {
    const index = estoque.findIndex(item => item.id === id);
    if (index !== -1) {
        if (estoque[index].quantidade >= quantidadeVendida) {
            estoque[index].quantidade -= quantidadeVendida;
        } else {
            throw new Error(`Quantidade insuficiente em estoque para a modalidade com ID ${id}.`);
        }
    } else {
        throw new Error(`Item com ID ${id} não encontrado no estoque.`);
    }
};

export const getAllEstoque = (): EstoquePaes[] => {
    return estoque;
};

export const getItemById = (id: number): EstoquePaes | undefined => {
    return estoque.find(item => item.id === id);
};
