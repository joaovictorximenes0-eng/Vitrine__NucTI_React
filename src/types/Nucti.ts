export interface Projeto {
  id: string;
  titulo: string;
  resumo: string;
  descricaoCompleta: string;
  fotos: string[];
  formLink: string;
  membrosIds?: string[]; // IDs dos membros vinculados ao projeto
}

export interface MembroEquipe {
  id: string; // Adicionado ID único para facilitar a filtragem
  nome: string;
  cargo: string;
  foto: string;
  redesSociais?: RedesSociais;
}

export interface RedesSociais {
  linkedin?: string;
  github?: string;
  instagram?: string;
}

// Suas interfaces antigas ficam aqui em cima...

export interface MembroEquipe {
  nome: string;
  cargo: string;
  foto: string;
  redesSociais?: RedesSociais; // O '?' significa que é opBora pra firula! É no detalhe que a gente separa um projeto "ok" de um projeto com cara de premium. 
}