"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModalidadePaesService {
    constructor() {
        this.modalidades = [];
    }
    getAllModalidades() {
        return this.modalidades;
    }
    createModalidade(id, nome, preco, vegano) {
        const novaModalidade = { id, nome, preco, vegano };
        this.modalidades.push(novaModalidade);
        return novaModalidade;
    }
    deleteModalidade(id) {
        const index = this.modalidades.findIndex(modalidade => modalidade.id === id);
        if (index !== -1) {
            this.modalidades.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.default = new ModalidadePaesService();
