export type CategoriaMembro = 'professor' | 'aluno';

export interface RedesSociais {
  linkedin?: string;
  github?: string;
  instagram?: string;
}


export interface MembroEquipeSemId {
  nome: string;
  title?: 'Dr.'| 'Drª' | 'Dra'
  cargo: string;
  categoria: CategoriaMembro;
  foto: string;
  redesSociais?: RedesSociais;
}

export interface MembroEquipe extends MembroEquipeSemId{
  id: string;
}

export interface ProjetoSemId {
  titulo: string;
  resumo: string;
  descricaoCompleta: string;
  fotos: string[];
  formLink?: string;
  membrosIds: string[];
}
export interface Projeto extends ProjetoSemId{
  id: string;
}