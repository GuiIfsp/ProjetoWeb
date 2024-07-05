import { ModalidadePaes } from '../models/ModalidadePaes';

let modalidades: ModalidadePaes[] = [];

export const getAllModalidades = (): ModalidadePaes[] => {
    return modalidades;
};

export const getModalidadeById = (id: number): ModalidadePaes | undefined => {
    return modalidades.find(modalidade => modalidade.id === id);
};

export const saveModalidade = (modalidade: ModalidadePaes): void => {
    const modalidadeExistente = modalidades.find(m => m.id === modalidade.id);
    if (modalidadeExistente) {
        throw new Error(`Já existe uma modalidade com o ID ${modalidade.id}`);
    }
    modalidades.push(modalidade);
};

export const deleteModalidade = (id: number): void => {
    modalidades = modalidades.filter(modalidade => modalidade.id !== id);
};
