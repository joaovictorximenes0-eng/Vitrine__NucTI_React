import type { Projeto, MembroEquipe } from '../types/Nucti';

export const siteContent = {
  header: {
    titulo: "NucTI",
    formGeralLink: "https://forms.google.com/formulario-geral",
  },
  quemSomos: {
    titulo: "Quem somos?",
    descricao: "O NucTI é o Núcleo de Tecnologia da Informação da faculdade, focado em desenvolvimento prático e projetos acadêmicos.",
    imagem: "https://via.placeholder.com/500x300?text=NucTI"
  },
  projetos: [
    {
      id: "iot",
      titulo: "Sistemas Embarcados e IoT",
      resumo: "Soluções inteligentes com sensores para automação do campus.",
      descricaoCompleta: "Desenvolvimento de projetos práticos com ESP32 e sensores para monitoramento em tempo real.",
      fotos: ["https://via.placeholder.com/400x250?text=Projeto+IoT"],
      formLink: "https://forms.google.com/link-iot"
    }
  ] as Projeto[],
  equipe: [
    { nome: "João Silva", cargo: "Coordenador", foto: "https://via.placeholder.com/120" }
  ] as MembroEquipe[]
};