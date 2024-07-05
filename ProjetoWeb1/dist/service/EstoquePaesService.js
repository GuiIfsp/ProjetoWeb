"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const estoque = [];
class EstoquePaesService {
    getEstoque() {
        return estoque;
    }
    updateEstoque(modalidadeId, quantidade) {
        const index = estoque.findIndex(item => item.modalidadeId === modalidadeId);
        if (index !== -1) {
            estoque[index].quantidade += quantidade;
        }
        else {
            const novoEstoque = { modalidadeId, quantidade };
            estoque.push(novoEstoque);
        }
        return estoque.find(item => item.modalidadeId === modalidadeId);
    }
}
exports.default = new EstoquePaesService();
