import type { MembroEquipe, MembroEquipeSemId } from '../types/Nucti';
import { addIdMember } from './uuid5'

const cores_profs = [
  '#003D7A',
  '#004D9F',
  '#0056B3',
  '#0066CC',
  '#0077B6',
  '#0275B8',
  '#0284C7',
  '#028CCF',
  '#0394D6'
]

function get_prof_color(): string{
  return cores_profs[Math.floor(Math.random() * (cores_profs.length))].replaceAll("#",'')
}

const professores_sem_id: MembroEquipeSemId[] = [
  {
    nome: "Prof. Dr. Ricardo Silva",
    cargo: "Coordenador Geral",
    categoria: "professor",
    foto: `https://placehold.co/200x200/${get_prof_color()}/ffffff?text=RS`,
    redesSociais: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    nome: "Profa. Dra. Helena Castro",
    cargo: "Orientadora de IA",
    categoria: "professor",
    foto: `https://placehold.co/200x200/${get_prof_color()}/ffffff?text=HC`,
    redesSociais: { linkedin: "https://linkedin.com" },
  },
  {
    nome: "Drª Adriana Sicsú",
    cargo: "Coordenadora de CC",
    categoria: "professor",
    foto: `https://placehold.co/200x200/${get_prof_color()}/ffffff?text=AS`,
    redesSociais: { linkedin: "https://linkedin.com" },
  },
  {
    nome: "Dr. Carlos Sicsú",
    cargo: "Coordenador de TADS",
    categoria: "professor",
    foto: `https://placehold.co/200x200/${get_prof_color()}/ffffff?text=CS`,
    redesSociais: { linkedin: "https://linkedin.com" },
  },
  {
    nome: "Dr. Maximiano Correia",
    cargo: "",
    categoria: "professor",
    foto: `https://placehold.co/200x200/${get_prof_color()}/ffffff?text=MC`,
    redesSociais: { linkedin: "https://linkedin.com" },
  },
];

export const professores: MembroEquipe[] = addIdMember(professores_sem_id,true)
