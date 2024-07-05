import { Request, Response } from 'express';
import * as EstoquePaesService from '../services/EstoquePaesService';
import * as ModalidadePaesService from '../services/ModalidadePaesService';
import { ModalidadePaes } from '../models/ModalidadePaes';

export const saveModalidade = (req: Request, res: Response): void => {
    const { id, nome, vegano } = req.body;

    if (typeof id !== 'number' || typeof nome !== 'string' || typeof vegano !== 'boolean') {
        res.status(400).send('Todos os campos (id, nome, vegano) devem ser do tipo correto.');
        return;
    }

    const modalidade: ModalidadePaes = { id, nome, vegano };

    try {
        ModalidadePaesService.saveModalidade(modalidade);
        res.status(201).send('Modalidade adicionada com sucesso');
    } catch (error) {
        res.status(400).send('Erro, id já existente');
    }
};

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
        res.status(400).send("id ja existente");
    }
};

export const getAllEstoque = (req: Request, res: Response): void => {
    const estoque = EstoquePaesService.getAllEstoque();
    res.json(estoque);
};

export const getQuantidadeById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    const quantidade = EstoquePaesService.getItemById(id);
    res.json({ quantidade });
};

export const getAllModalidades = (req: Request, res: Response): void => {
    const modalidades = ModalidadePaesService.getAllModalidades();
    res.json(modalidades);
};

export const getItemById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    const modalidade = ModalidadePaesService.getModalidadeById(id);
    if (modalidade) {
        res.json(modalidade);
    } else {
        res.status(404).send('Modalidade não encontrada');
    }
};

export const deleteModalidade = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    ModalidadePaesService.deleteModalidade(id);
    res.send('Modalidade deletada com sucesso');
};
