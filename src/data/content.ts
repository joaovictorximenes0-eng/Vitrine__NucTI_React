import type { Projeto, MembroEquipe } from "../types/Nucti";

export const siteContent = {
  header: {
    titulo: "NucTI",
    formGeralLink: "https://forms.google.com",
  },
  quemSomos: {
    titulo: "Quem somos?",
    descricao:
      "O NucTI é o Núcleo de Tecnologia da Informação da faculdade. Atuamos na intersecção entre ensino, pesquisa e extensão, desenvolvendo soluções tecnológicas reais para o campus e a comunidade.",
    imagem: "https://placehold.co/600x400/0056b3/ffffff?text=NucTI+Lab",
  },
  projetos: [
    {
      id: "iot-campus",
      titulo: "Sistemas Embarcados e IoT",
      resumo:
        "Monitoramento ambiental e automação de salas usando ESP32 e redes de sensores.",
      descricaoCompleta: "...",
      fotos: ["https://placehold.co/800x500/1e293b/ffffff?text=Bancada+IoT"],
      formLink: "https://forms.google.com",
      membrosIds: ["ricardo-silva", "carlos-eduardo"],
    },
    {
      id: "app-academico",
      titulo: "Aplicativo de Gestão Acadêmica",
      resumo:
        "Plataforma mobile para alunos acompanharem horários, eventos e avisos do núcleo.",
      descricaoCompleta: "...",
      fotos: [
        "https://placehold.co/800x500/334155/ffffff?text=Interface+Mobile",
      ],
      formLink: "https://forms.google.com",
      membrosIds: ["ana-souza", "mariana-costa"],
    },
    {
      id: "ia-visao",
      titulo: "Visão Computacional e IA",
      resumo:
        "Modelos de IA para contagem de fluxo de pessoas e reconhecimento de padrões.",
      descricaoCompleta: "...",
      fotos: [
        "https://placehold.co/800x500/475569/ffffff?text=Detecção+OpenCV",
      ],
      formLink: "https://forms.google.com",
      membrosIds: ["ricardo-silva", "ana-souza"],
    },
  ] as Projeto[],
  equipe: [
    {
      id: "ricardo-silva",
      nome: "Prof. Dr. Ricardo Silva",
      cargo: "Coordenador Geral",
      foto: "https://placehold.co/200x200/0056b3/ffffff?text=RS",
      redesSociais: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      id: "ana-souza",
      nome: "Ana Beatriz Souza",
      cargo: "Líder de Desenvolvimento",
      foto: "https://placehold.co/200x200/0d9488/ffffff?text=AB",
      redesSociais: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: "carlos-eduardo",
      nome: "Carlos Eduardo",
      cargo: "Pesquisador IoT",
      foto: "https://placehold.co/200x200/d97706/ffffff?text=CE",
      redesSociais: {
        github: "https://github.com",
      },
    },
    {
      id: "mariana-costa",
      nome: "Mariana Costa",
      cargo: "Design / UX",
      foto: "https://placehold.co/200x200/7c3aed/ffffff?text=MC",
      redesSociais: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
  ] as MembroEquipe[],
};