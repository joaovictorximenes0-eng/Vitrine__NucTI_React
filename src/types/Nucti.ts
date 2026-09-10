export type CategoriaMembro = 'professor' | 'aluno';

export interface RedesSociais {
  linkedin?: string;
  github?: string;
  instagram?: string;
}

export interface MembroEquipe {
  id: string;
  nome: string;
  cargo: string;
  categoria: CategoriaMembro;
  foto: string;
  redesSociais?: RedesSociais;
}

export interface Projeto {
  id: string;
  titulo: string;
  resumo: string;
  descricaoCompleta: string;
  fotos: string[];
  formLink?: string;
  membrosIds: string[];
}