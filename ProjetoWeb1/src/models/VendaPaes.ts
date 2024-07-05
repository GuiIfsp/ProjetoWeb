export interface VendaPaes {
  idVenda: string;
  CPFCliente: string;
  itens: {
    idModalidade: number;
    quantidade: number;
  }[];
  valorTotal?: number;
}
