import type { MembroEquipe, MembroEquipeSemId } from '../types/Nucti';
import { addIdMember } from './uuid5'

const color_students = [
  ['#115e59', '#0f766e', '#0d9488', '#14b8a6', '#2dd4bf', '#5eead4'],
  ['#92400e', '#b45309', '#d97706', '#f59e0b', '#fbbf24', '#fcd34d'],
  ['#166534', '#15803d', '#16a34a', '#22c55e', '#4ade80', '#86efac'],
  ['#5b21b6', '#6d28d9', '#7c3aed', '#8b5cf6', '#a78bfa', '#c4b5fd'],
  ['#9f1239', '#be123c', '#e11d48', '#f43f5e', '#fb7185', '#fda4af'],
];

function get_student_color(nome: string): string{
  const relative_index = (n: number, l: number): number => n%l===0 ? n%l : (n%l)-1;

  const l_formated = nome.replaceAll(' ','').toLowerCase()
  const choiced_matrix = color_students[relative_index(l_formated.charCodeAt(0),color_students.length)]
  const choiced_tone = choiced_matrix[relative_index(l_formated.charCodeAt(1),choiced_matrix.length)]

  return choiced_tone.replaceAll("#",'')
}

export const alunos_sem_id: MembroEquipeSemId[] = [
  {
    nome: "João Victor",
    cargo: "Desenvolvedor Full-Stack",
    categoria: "aluno",
    foto: `https://placehold.co/200x200/${get_student_color('JV')}/ffffff?text=JC`,
    redesSociais: { linkedin:"https://www.linkedin.com/in/joao-victor-xg", github:"https://github.com/joaovictorximenes0-eng" , instagram:"https://www.instagram.com/ericke2008/" },
  },
  {
    nome: "Erick Alves",
    cargo: "Desenvolvedor voluntário",
    categoria: "aluno",
    foto: `https://placehold.co/200x200/${get_student_color('EA')}/ffffff?text=EA`,
    redesSociais: { linkedin:"https://www.linkedin.com/in/erick-alves-dos-santos-814506362", github:"https://github.com/erickalvesflk" , instagram:"https://www.instagram.com/ericke2008/" },
  },
  {
    nome: "Matheus Evangelista",
    cargo: "Desenvolvedor voluntário",
    categoria: "aluno",
    foto: `https://placehold.co/200x200/${get_student_color('ME')}/ffffff?text=ME`,
    redesSociais: { github:"https://github.com/Zoup44", instagram: "https://www.instagram.com/evangelista_zoup/" },
  },
];

export const alunos: MembroEquipe[] = addIdMember(alunos_sem_id)