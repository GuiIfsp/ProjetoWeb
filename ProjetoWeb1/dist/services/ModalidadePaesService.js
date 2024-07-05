"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteModalidade = exports.saveModalidade = exports.getModalidadeById = exports.getAllModalidades = void 0;
let modalidades = [];
const getAllModalidades = () => {
    return modalidades;
};
exports.getAllModalidades = getAllModalidades;
const getModalidadeById = (id) => {
    return modalidades.find(modalidade => modalidade.id === id);
};
exports.getModalidadeById = getModalidadeById;
const saveModalidade = (modalidade) => {
    const modalidadeExistente = modalidades.find(m => m.id === modalidade.id);
    if (modalidadeExistente) {
        throw new Error(`Já existe uma modalidade com o ID ${modalidade.id}`);
    }
    modalidades.push(modalidade);
};
exports.saveModalidade = saveModalidade;
const deleteModalidade = (id) => {
    modalidades = modalidades.filter(modalidade => modalidade.id !== id);
};
exports.deleteModalidade = deleteModalidade;
