import type { MembroEquipe, MembroEquipeSemId } from '../types/Nucti';
import { addIdMember } from './uuid5'

const prof_colors = [
  '#003D7A',
  '#004D9F',
  '#0056B3',
  '#0066CC',
  '#0077B6',
  '#0275B8',
  '#0284C7',
  '#028CCF',
  '#0394D6',
  '#039CDE',
  '#04A4E5',
  '#05ACED',
];

function get_prof_color(nome: string): string{
  const relative_index = (n: number, l: number): number => n%l===0 ? n%l : (n%l)-1;

  const l_formated = nome.replaceAll(' ','').toLowerCase()
  const choiced_tone = prof_colors[relative_index(l_formated.charCodeAt(1),prof_colors.length)]

  return choiced_tone.replaceAll("#",'')
}

const professores_sem_id: MembroEquipeSemId[] = [
  {
    nome: "Adriana Sicsú",
    title:"Drª",
    cargo: "Coordenadora de CC",
    categoria: "professor",
    foto: `https://placehold.co/200x200/${get_prof_color('AS')}/ffffff?text=AS`,
    redesSociais: { linkedin: "https://linkedin.com" },
  },
  {
    nome: "Carlos Sicsú",
    title:"Dr.",
    cargo: "Coordenador de TADS",
    categoria: "professor",
    foto: `https://placehold.co/200x200/${get_prof_color('CS')}/ffffff?text=CS`,
    redesSociais: { linkedin: "https://linkedin.com" },
  },
  {
    nome: "Maximiano Correia",
    title: "Dr.",
    cargo: "Professor",
    categoria: "professor",
    foto: `https://placehold.co/200x200/${get_prof_color('MC')}/ffffff?text=MC`,
    redesSociais: { linkedin: "https://linkedin.com" },
  },
];

export const professores: MembroEquipe[] = addIdMember(professores_sem_id,true)
