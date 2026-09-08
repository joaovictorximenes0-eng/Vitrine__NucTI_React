export interface Projeto {
  id: string;
  titulo: string;
  resumo: string;
  descricaoCompleta: string;
  fotos: string[];
  formLink: string;
}

export interface MembroEquipe {
  nome: string;
  cargo: string;
  foto: string;
  linkedin?: string;
  instagram?: string
}