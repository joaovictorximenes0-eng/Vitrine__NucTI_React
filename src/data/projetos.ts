import type { Projeto, ProjetoSemId } from '../types/Nucti';
import { addIdProject } from './uuid5'

const projects_colors = [
  '#0f172a',
  '#1e293b',
  '#293548',
  '#334155',
  '#3d4d61',
  '#475569',
  '#52647a',
  '#64748b',
];
function get_project_color(nome: string): string{
  const relative_index = (n: number, l: number): number => n%l===0 ? n%l : (n%l)-1;

  const l_formated = nome.replaceAll(' ','').toLowerCase()
  const choiced_tone = projects_colors[relative_index(l_formated.charCodeAt(1),projects_colors.length)]

  return choiced_tone.replaceAll("#",'')
}

const projetos_sem_id: ProjetoSemId[] = [
  {

    titulo: "CompetiTech",
    resumo: "Ensino de Robótica com Robôs de Competição",
    descricaoCompleta: "Em desenvolvimento...",
    fotos: [`https://placehold.co/800x500/${get_project_color('CT')}/ffffff?text=CompetiTech`],
    formLink: "https://forms.google.com",
    membrosIds: [
      "0f37555a5eb55c8e85a12465e2f445c1"
    ],
  },
  {
    titulo: "Explorando Saber",
    resumo: "desenvolvimento de plataforma de ensino para alunos do Ensino Médio",
    descricaoCompleta: "...",
    fotos: [`https://placehold.co/800x500/${get_project_color('ES')}/ffffff?text=Explorando+Saber`],
    formLink: "https://forms.google.com",
    membrosIds: [
      "e037a53172985e4b8a2a5c82c0000691", 
      "97c4ea383b905a97bc5b55a969b11773"
    ],
  },
];

export const projetos: Projeto[] = addIdProject(projetos_sem_id)