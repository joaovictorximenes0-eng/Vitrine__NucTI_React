import { siteContent } from '../../data/content';

export default function QuemSomosSection() {
  const { titulo, descricao, imagem } = siteContent.quemSomos;

  return (
    <section className="section quem-somos">
      <div className="quem-somos__texto">
        <h2>{titulo}</h2>
        <p>{descricao}</p>
      </div>
      <img src={imagem} alt="NucTI" className="quem-somos__imagem" />
    </section>
  );
}