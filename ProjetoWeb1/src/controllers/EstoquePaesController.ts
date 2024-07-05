import { Request, Response } from 'express';
import * as EstoquePaesService from '../services/EstoquePaesService';

export const addQuantidadeEstoque = (req: Request, res: Response): void => {
    const { id, quantidade, preco } = req.body;

    if (typeof id !== 'number' || typeof quantidade !== 'number' || typeof preco !== 'number') {
        res.status(400).send('Os campos id, quantidade e preço devem ser números.');
        return;
    }

    try {
        EstoquePaesService.addQuantidadeEstoque(id, quantidade, preco);
        res.send('Quantidade adicionada ao estoque');
    } catch (error) {
        res.status(400).send("Id não existente");
    }
};

export const getAllEstoque = (req: Request, res: Response): void => {
    const estoque = EstoquePaesService.getAllEstoque();
    res.json(estoque);
};

export const getQuantidadeById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    const item = EstoquePaesService.getItemById(id);
    if (item) {
        res.json({ quantidade: item.quantidade, preco: item.preco });
    } else {
        res.status(404).send('Item não encontrado no estoque');
    }
};
