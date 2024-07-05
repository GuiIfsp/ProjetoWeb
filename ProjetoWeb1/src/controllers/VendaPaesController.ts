import { Request, Response } from 'express';
import { VendaPaes } from '../models/VendaPaes';
import * as VendaPaesService from '../services/VendaPaesService';

export const realizarVenda = (req: Request, res: Response): void => {
  const venda: VendaPaes = req.body as VendaPaes;

  try {
    const novaVenda = VendaPaesService.realizarVenda(venda);
    res.status(201).json(novaVenda);
  } catch (error) {
    res.status(400).send("erro");
  }
};

export const getVendaById = (req: Request, res: Response): void => {
  const idVenda = req.params.id;

  const venda = VendaPaesService.getVendaById(idVenda);
  if (venda) {
    res.json(venda);
  } else {
    res.status(404).send('Venda não encontrada');
  }
};
