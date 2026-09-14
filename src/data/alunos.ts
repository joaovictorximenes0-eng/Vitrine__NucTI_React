import type { MembroEquipe, MembroEquipeSemId } from '../types/Nucti';
import { addIdMember } from './uuid5'

export const alunos_sem_id: MembroEquipeSemId[] = [
  {
    nome: "Ana Beatriz Souza",
    cargo: "Desenvolvedora Frontend",
    categoria: "aluno",
    foto: "https://placehold.co/200x200/0d9488/ffffff?text=AB",
    redesSociais: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    nome: "Carlos Eduardo",
    cargo: "Pesquisador IoT",
    categoria: "aluno",
    foto: "https://placehold.co/200x200/d97706/ffffff?text=CE",
    redesSociais: { github: "https://github.com" },
  },
  {
    nome: "Gabriel Martins",
    cargo: "Desenvolvedor Firmware",
    categoria: "aluno",
    foto: "https://placehold.co/200x200/16a34a/ffffff?text=GM",
    redesSociais: { github: "https://github.com" },
  },
  {
    nome: "Mariana Costa",
    cargo: "UX/UI Designer",
    categoria: "aluno",
    foto: "https://placehold.co/200x200/7c3aed/ffffff?text=MC",
    redesSociais: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  },
  {
    nome: "João Victor",
    cargo: "Desenvolvedor Full-Stack",
    categoria: "aluno",
    foto: "https://placehold.co/200x200/7c3aed/ffffff?text=JC",
    redesSociais: { linkedin:"https://www.linkedin.com/in/joao-victor-xg", github:"https://github.com/joaovictorximenes0-eng" , instagram:"https://www.instagram.com/ericke2008/" },
  },
  {
    nome: "Erick Alves",
    cargo: "Desenvolvedor voluntário",
    categoria: "aluno",
    foto: "https://placehold.co/200x200/7c3aed/ffffff?text=EA",
    redesSociais: { linkedin:"https://www.linkedin.com/in/erick-alves-dos-santos-814506362", github:"https://github.com/erickalvesflk" , instagram:"https://www.instagram.com/ericke2008/" },
  },
  {
    nome: "Matheus Evangelista",
    cargo: "Desenvolvedor voluntário",
    categoria: "aluno",
    foto: "https://placehold.co/200x200/7c3aed/ffffff?text=ME",
    redesSociais: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  },
];

export const alunos: MembroEquipe[] = addIdMember(alunos_sem_id)