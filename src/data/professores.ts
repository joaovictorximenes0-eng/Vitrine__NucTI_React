import type { MembroEquipe, MembroEquipeSemId } from '../types/Nucti';
import { addIdMember } from './uuid5'

const professores_sem_id: MembroEquipeSemId[] = [
  {
    nome: "Prof. Dr. Ricardo Silva",
    cargo: "Coordenador Geral",
    categoria: "professor",
    foto: "https://placehold.co/200x200/0056b3/ffffff?text=RS",
    redesSociais: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    nome: "Profa. Dra. Helena Castro",
    cargo: "Orientadora de IA",
    categoria: "professor",
    foto: "https://placehold.co/200x200/0284c7/ffffff?text=HC",
    redesSociais: { linkedin: "https://linkedin.com" },
  },
  {
    nome: "Drª Adriana Sicsú",
    cargo: "Coordenadora de CC",
    categoria: "professor",
    foto: "https://placehold.co/200x200/0284c7/ffffff?text=AS",
    redesSociais: { linkedin: "https://linkedin.com" },
  },
  {
    nome: "Dr. Carlos Sicsú",
    cargo: "Coordenador de TADS",
    categoria: "professor",
    foto: "https://placehold.co/200x200/0284c7/ffffff?text=CA",
    redesSociais: { linkedin: "https://linkedin.com" },
  },
  {
    nome: "Dr. Maximiano Correia",
    cargo: "",
    categoria: "professor",
    foto: "https://placehold.co/200x200/0284c7/ffffff?text=MC",
    redesSociais: { linkedin: "https://linkedin.com" },
  },
];

export const professores: MembroEquipe[] = addIdMember(professores_sem_id)