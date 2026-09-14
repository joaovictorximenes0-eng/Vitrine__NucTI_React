import type { Projeto, ProjetoSemId } from '../types/Nucti';
import { addIdProject } from './uuid5'

const projetos_sem_id: ProjetoSemId[] = [
  {
    titulo: "Sistemas Embarcados e IoT",
    resumo: "Monitoramento ambiental e automação de salas usando ESP32 e redes de sensores.",
    descricaoCompleta: "...",
    fotos: ["https://placehold.co/800x500/1e293b/ffffff?text=Bancada+IoT"],
    formLink: "https://forms.google.com",
    membrosIds: [
      "4df90e4fb61f5a08a6a8e8c8678e0a8e", 
      "carlos-eduardo", 
      "gabriel-martins"
    ],
  },
  {
    titulo: "Aplicativo de Gestão Acadêmica",
    resumo: "Plataforma mobile para alunos acompanharem horários, eventos e avisos do núcleo.",
    descricaoCompleta: "...",
    fotos: ["https://placehold.co/800x500/334155/ffffff?text=Interface+Mobile"],
    formLink: "https://forms.google.com",
    membrosIds: [
      "2e5c718c5e775e2784217806e9018a5a", 
      "a364d5156497573c9902035e16046dab"
    ],
  },
  {
    titulo: "Visão Computacional e IA",
    resumo: "Modelos de IA para contagem de fluxo de pessoas e reconhecimento de padrões.",
    descricaoCompleta: "...",
    fotos: ["https://placehold.co/800x500/475569/ffffff?text=Visão+Computacional+e+IA"],
    formLink: "https://forms.google.com",
    membrosIds: [
      "4df90e4fb61f5a08a6a8e8c8678e0a8e",
      "2e5c718c5e775e2784217806e9018a5a",
      "7817d55468775b708f4f3c8254894820"
    ],
  },
  {

    titulo: "CompetiTech",
    resumo: "Ensino de Robótica com Robôs de Competição",
    descricaoCompleta: "Em desenvolvimento...",
    fotos: ["https://placehold.co/800x500/475569/ffffff?text=CompetiTech"],
    formLink: "https://forms.google.com",
    membrosIds: [
      "0f37555a5eb55c8e85a12465e2f445c1"
    ],
  },
  {
    titulo: "Explorando Saber",
    resumo: "desenvolvimento de plataforma de ensino para alunos do Ensino Médio",
    descricaoCompleta: "...",
    fotos: ["https://placehold.co/800x500/475569/ffffff?text=Explorando+Saber"],
    formLink: "https://forms.google.com",
    membrosIds: [
      "e037a53172985e4b8a2a5c82c0000691", 
      "97c4ea383b905a97bc5b55a969b11773"
    ],
  },
];

export const projetos: Projeto[] = addIdProject(projetos_sem_id)