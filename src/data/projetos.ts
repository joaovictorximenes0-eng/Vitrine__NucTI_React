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
    fotos: [
      'https://mittechreview.com.br/wp-content/uploads/2022/03/trbr_artigo_banner1_020322-1.jpg'
    ],
    formLink: "https://forms.google.com",
    membrosIds: [
      "9b757ac5b62e517b89df00340964c957"
    ],
  },
  {
    titulo: "Explorando Saber",
    resumo: "desenvolvimento de plataforma de ensino para alunos do Ensino Médio",
    descricaoCompleta: "...",
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFPBvUaihOm1rMzSlyAv6Y5HQxFde2H8-1ZfrsIGgvA&s=10'
    ],
    formLink: "https://forms.google.com",
    membrosIds: [
      "2ae844348b325184a581c70829af2a6c", 
      "b6d14e334d3f5a509d596c212ad37e44"
    ],
  },
];

export const projetos: Projeto[] = addIdProject(projetos_sem_id)