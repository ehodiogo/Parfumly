export function Home() {
  const funcionalidades = [
    "Cadastro de perfumes",
    "Avaliação de fragrâncias (tipo Letterboxd)",
    "Recomendação de usos e AI Recommender",
    "Dupe Finder - encontre alternativas similares",
    "Rankings de usuários e perfumes",
    "Gamificação: badges e desafios",
    "Listas e curadorias",
    "Ofertas e promoções",
    "Wishlist e comparação de perfumes",
  ];

  return (
    <>
      <style>
        {`
          /* Estilos Globais e Variáveis */
          :root {
            --cor-primaria-escura: #4B7158;
            --cor-primaria-clara: #A8D5BA;
            --cor-secundaria-escura: #6B1E37;
            --cor-secundaria-clara: #FDF6F0;
            --cor-destaque: #D4AF37;
            --fonte-principal: 'Segoe UI', sans-serif;
            --borda-arredondada: 25px;
            --sombra-card: 0 5px 15px rgba(0,0,0,0.1);
            --sombra-card-hover: 0 20px 40px rgba(0,0,0,0.2);
          }

          body {
            font-family: var(--fonte-principal);
            background-color: var(--cor-secundaria-clara);
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          /* Seção Hero */
          .parfumly-hero {
            min-height: 90vh;
            background: linear-gradient(135deg, var(--cor-primaria-escura) 0%, var(--cor-primaria-clara) 100%);
            color: var(--cor-secundaria-clara);
            padding: 0 20px;
          }

          .parfumly-hero h1 {
            text-shadow: 2px 2px 10px rgba(0,0,0,0.2);
          }

          /* Botões */
          .parfumly-btn {
            background-color: var(--cor-destaque);
            color: var(--cor-primaria-escura);
            padding: 0.85rem 3rem;
            border-radius: 50px;
            font-size: 1.2rem;
            box-shadow: 0 6px 20px rgba(0,0,0,0.25);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .parfumly-btn:hover {
            transform: scale(1.05);
          }

          .parfumly-cta-btn {
            background-color: var(--cor-secundaria-escura);
            color: var(--cor-secundaria-clara);
            padding: 0.85rem 3rem;
            border-radius: 50px;
            font-size: 1.2rem;
            box-shadow: 0 6px 20px rgba(0,0,0,0.25);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .parfumly-cta-btn:hover {
            transform: scale(1.05);
          }

          /* Seção de Funcionalidades */
          .parfumly-funcionalidades h2 {
            color: var(--cor-secundaria-escura);
          }

          .parfumly-card {
            border-radius: var(--borda-arredondada);
            background: #FFF8F0;
            transition: all 0.3s ease;
            cursor: pointer;
            box-shadow: var(--sombra-card);
            border: none !important;
          }

          .parfumly-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--sombra-card-hover);
          }

          .parfumly-card-icon {
            width: 60px;
            height: 60px;
            background-color: var(--cor-secundaria-escura);
            border-radius: 50%;
            color: var(--cor-secundaria-clara);
            font-weight: bold;
            font-size: 1.4rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }

          .parfumly-card p {
            color: var(--cor-primaria-escura);
          }

          /* Seção Call to Action Final */
          .parfumly-cta {
            background: linear-gradient(135deg, var(--cor-destaque) 0%, var(--cor-primaria-clara) 100%);
            color: var(--cor-primaria-escura);
          }

          /* Rodapé */
          .parfumly-footer {
            color: #666666;
            background-color: var(--cor-secundaria-clara);
            font-size: 0.95rem;
          }

        `}
      </style>

      <div style={{ fontFamily: "var(--fonte-principal)", backgroundColor: "var(--cor-secundaria-clara)" }}>

        {/* Hero com Gradiente */}
        <section
          className="d-flex flex-column justify-content-center align-items-center text-center parfumly-hero"
        >
          <h1 className="display-2 fw-bold mb-3">
            Parfumly
          </h1>
          <p className="lead mb-4" style={{ fontSize: "1.3rem", maxWidth: "700px" }}>
            Organize sua coleção, avalie fragrâncias, descubra dupes e conquiste badges neste SaaS premium para amantes de perfumes.
          </p>
          <a
            href="#funcionalidades"
            className="btn fw-bold parfumly-btn"
          >
            Conheça as Funcionalidades
          </a>
        </section>

        {/* Funcionalidades com Hover */}
        <section id="funcionalidades" className="py-5 parfumly-funcionalidades">
          <div className="container">
            <h2 className="text-center fw-bold mb-5" style={{ fontSize: "2rem" }}>
              Funcionalidades do Parfumly
            </h2>
            <div className="row g-4">
              {funcionalidades.map((item, idx) => (
                <div key={idx} className="col-12 col-md-6 col-lg-4">
                  <div className="card h-100 text-center shadow-sm parfumly-card">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      <div className="mb-3 d-flex justify-content-center align-items-center parfumly-card-icon">
                        ✓
                      </div>
                      <p className="card-text fw-semibold" style={{ fontSize: "1.05rem" }}>
                        {item}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="text-center py-5 parfumly-cta">
          <div className="container">
            <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>Comece sua experiência agora</h2>
            <p className="mb-4" style={{ fontSize: "1.2rem", maxWidth: "650px", margin: "0 auto" }}>
              Crie sua conta, organize sua coleção e descubra novos perfumes com recomendações inteligentes.
            </p>
            <a
              href="/signup"
              className="btn fw-bold parfumly-cta-btn"
            >
              Criar Conta
            </a>
          </div>
        </section>

        {/* Footer sofisticado */}
        <footer className="text-center py-3 parfumly-footer">
          &copy; 2025 Parfumly. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
}

export default Home;