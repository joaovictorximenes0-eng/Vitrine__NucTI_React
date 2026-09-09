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
      descricaoCompleta:
        "Projeto focado no desenvolvimento de nós sensores para medição de temperatura, umidade e ocupação das salas de aula. Os dados são enviados em tempo real para um dashboard central.",
      fotos: [
        "https://placehold.co/800x500/1e293b/ffffff?text=Bancada+IoT",
        "https://placehold.co/800x500/0f172a/ffffff?text=Placa+ESP32",
      ],
      formLink: "https://forms.google.com",
    },
    {
      id: "app-academico",
      titulo: "Aplicativo de Gestão Acadêmica",
      resumo:
        "Plataforma mobile para alunos acompanharem horários, eventos e avisos do núcleo.",
      descricaoCompleta:
        "Desenvolvimento de um aplicativo cross-platform com React Native e Node.js para centralizar a comunicação entre os laboratórios de pesquisa e os estudantes.",
      fotos: [
        "https://placehold.co/800x500/334155/ffffff?text=Interface+Mobile",
      ],
      formLink: "https://forms.google.com",
    },
    {
      id: "ia-visao",
      titulo: "Visão Computacional e IA",
      resumo:
        "Modelos de IA para contagem de fluxo de pessoas e reconhecimento de padrões.",
      descricaoCompleta:
        "Pesquisa aplicada usando algoritmos de deep learning para análise de imagem em câmeras de segurança internas do campus.",
      fotos: [
        "https://placehold.co/800x500/475569/ffffff?text=Detecção+OpenCV",
      ],
      formLink: "https://forms.google.com",
    },
  ] as Projeto[],
  equipe: [
    {
      nome: "Prof. Dr. Ricardo Silva",
      cargo: "Coordenador Geral",
      foto: "https://placehold.co/200x200/0056b3/ffffff?text=RS",
    },
    {
      nome: "Ana Beatriz Souza",
      cargo: "Líder de Desenvolvimento",
      foto: "https://placehold.co/200x200/0d9488/ffffff?text=AB",
      redesSociais: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      nome: "Carlos Eduardo",
      cargo: "Pesquisador IoT",
      foto: "https://placehold.co/200x200/d97706/ffffff?text=CE",
    },
    {
      nome: "Mariana Costa",
      cargo: "Design / UX",
      foto: "https://placehold.co/200x200/7c3aed/ffffff?text=MC",
    },
  ] as MembroEquipe[],
};
