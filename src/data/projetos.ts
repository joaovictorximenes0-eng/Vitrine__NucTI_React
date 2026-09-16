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
      'https://mittechreview.com.br/wp-content/uploads/2022/03/trbr_artigo_banner1_020322-1.jpg',
      'https://ctrlplay.com.br/wp-content/uploads/2019/11/Torneio-de-Robotica-1.jpg',
      'https://portal1.iff.edu.br/nossos-campi/campos-centro/noticias/competicao-de-robotica-do-citi-2019-testa-competencias-tecnicas-de-estudantes/CompetiodeRobtica03.png/@@images/ba0e2da8-57e3-4b2d-94c3-886a0582af87.png'
    ],
    formLink: "https://forms.google.com",
    membrosIds: [
      "ae8d2a4ec40057cc8208ae366168d0bb"
    ],
  },
  {
    titulo: "Explorando Saber",
    resumo: "desenvolvimento de plataforma de ensino para alunos do Ensino Médio",
    descricaoCompleta: "...",
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFPBvUaihOm1rMzSlyAv6Y5HQxFde2H8-1ZfrsIGgvA&s=10',
      'https://blog.db1.com.br/wp-content/uploads/2020/07/Blog-DB1-spin-selling-e-desenvolvimento-de-software-scaled-e1596222218414.jpg'
    ],
    formLink: "https://forms.google.com",
    membrosIds: [
      "5fe00073f4f95170989b68b88afb0c32",
      "d075e66b4b345a80b411123485dace44"
    ],
  },
];

export const projetos: Projeto[] = addIdProject(projetos_sem_id)