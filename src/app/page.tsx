import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import Preloader from "./Preloader";

export default function Home() {
  return (
    <main className="min-h-screen bg-spa-sand font-sans flex flex-col">
      {/* Tela de Preloader com Lottie */}
      <Preloader />

      {/* Header Centralizado */}
      <header className="w-full py-10 flex justify-center bg-spa-green">
        <div className="flex flex-row items-center justify-center gap-3">
          <svg 
            className="w-14 h-14 fill-current text-[#e7b07a]"
            version="1.0" 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="350 480 560 520"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(0.000000,896.000000) scale(0.100000,-0.100000)" stroke="none">
              <path d="M4260 3025 c67 -35 110 -146 110 -285 0 -57 -12 -151 -35 -273 -48
-264 -59 -374 -52 -567 12 -314 84 -659 247 -1179 28 -90 49 -166 46 -169 -8
-8 -148 136 -241 248 -216 260 -363 566 -424 884 -60 309 -47 611 39 946 84
325 189 458 310 395z m985 -107 c2 -2 -17 -37 -42 -78 -184 -299 -336 -733
-393 -1115 -19 -129 -39 -437 -28 -425 3 3 22 61 43 130 109 364 309 762 499
988 127 153 287 242 411 229 89 -9 170 -61 220 -140 l18 -27 -156 -159 c-85
-87 -199 -214 -254 -282 -376 -473 -657 -1055 -721 -1497 l-19 -127 -17 40
c-133 307 -236 721 -277 1115 -18 169 -16 519 4 666 35 257 101 433 204 544
83 91 171 134 298 148 53 6 201 -1 210 -10z m3076 -665 c38 -36 71 -80 92
-122 28 -58 32 -75 32 -146 0 -118 -37 -190 -159 -310 -215 -211 -593 -420
-1040 -574 -214 -74 -338 -103 -626 -146 -23 -4 30 28 155 93 440 228 672 375
920 584 195 164 430 447 521 629 14 27 30 49 35 49 6 0 37 -26 70 -57z m-1864
-163 c18 -10 39 -33 48 -49 19 -38 19 -131 0 -177 -45 -109 -106 -163 -800
-716 -121 -96 -258 -208 -305 -247 -47 -40 -93 -76 -102 -81 -9 -6 40 70 110
168 70 99 172 243 227 322 211 300 442 606 514 680 42 42 96 86 121 98 59 28
143 29 187 2z m1180 -1333 c19 -38 27 -72 31 -127 3 -68 1 -80 -25 -130 -117
-223 -603 -358 -1206 -336 -288 10 -538 39 -902 102 -286 50 -293 55 -65 48
222 -6 572 8 800 31 419 44 788 138 1046 268 73 37 212 136 253 180 13 15 28
24 33 21 4 -3 20 -29 35 -57z m-2811 -418 c218 -196 557 -364 1000 -494 519
-153 1033 -199 1342 -120 l52 13 0 -57 c0 -125 -67 -224 -193 -286 -136 -66
-331 -71 -606 -15 -554 112 -1174 424 -1468 738 l-71 76 -42 -39 c-23 -22 -74
-78 -114 -125 -309 -362 -486 -737 -557 -1180 -31 -192 -31 -505 0 -710 54
-358 153 -674 311 -990 70 -140 128 -240 187 -323 19 -27 33 -51 30 -53 -8 -8
-246 232 -305 308 -257 329 -419 725 -478 1168 -22 173 -15 524 15 694 74 415
232 774 494 1119 79 105 301 347 318 347 3 0 42 -32 85 -71z"/>
            </g>
          </svg>
          <span className="text-3xl font-serif text-[#e7b07a] tracking-wide">
            Simone Anselmini
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden w-full flex flex-col items-center justify-center px-6 py-12 md:py-24 lg:px-24">
        {/* Animated Leaf Background */}
        <div
          className="absolute inset-0 z-0 animate-breeze opacity-20 pointer-events-none"
          style={{ backgroundImage: 'url(/leaf-shadow.svg)', backgroundSize: 'cover', backgroundPosition: 'top right' }}
        />

        <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6 items-start">
            <h1 className="text-5xl lg:text-7xl font-serif text-spa-green leading-tight animate-fade-in-left">
              Touch Up Massage
            </h1>
            <p className="text-lg lg:text-xl font-sans text-spa-green/90 leading-relaxed max-w-lg animate-fade-in-left delay-150">
              A verdadeira exclusividade em bem-estar. Uma técnica autoral de contorno e relaxamento profundo, desenhada para quem exige excelência, discrição e resultados visíveis.
            </p>
            <a 
              href="#agendamento"
              className="mt-4 inline-block px-8 py-4 bg-spa-green text-[#e7b07a] font-medium text-lg rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 animate-fade-in-left delay-300 text-center"
            >
              Solicitar Atendimento Exclusivo
            </a>
          </div>
          <div className="w-full flex justify-center md:justify-end animate-fade-in-right delay-500">
            <div className="relative w-full max-w-[450px] aspect-[4/5] bg-white/40 border border-white/60 rounded-2xl overflow-hidden shadow-xl flex flex-col items-center justify-center backdrop-blur-sm">
              <Image
                src="/headfotohero.gif"
                alt="Touch Up Massage Hero"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-white/40 backdrop-blur-sm flex flex-col items-center justify-center px-6 py-20 lg:py-24 lg:px-24">
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl font-serif text-spa-green mb-12 text-center">
            Benefícios da Técnica
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-4 p-6 bg-transparent">
              <div className="w-16 h-16 rounded-full bg-spa-sand border border-white/80 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-spa-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-spa-green">Drenagem de Alta Performance</h3>
              <p className="text-base text-spa-green/80 leading-relaxed">Eliminação rigorosa de retenção de líquidos com foco em resultados estéticos imediatos e purificação do sistema linfático.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 p-6 bg-transparent">
              <div className="w-16 h-16 rounded-full bg-spa-sand border border-white/80 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-spa-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-spa-green">Escultura Corporal</h3>
              <p className="text-base text-spa-green/80 leading-relaxed">Redefinição da silhueta com movimentos de precisão, entregando um contorno harmonioso e duradouro.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 p-6 bg-transparent">
              <div className="w-16 h-16 rounded-full bg-spa-sand border border-white/80 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-spa-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-spa-green">Lifting Natural Facial</h3>
              <p className="text-base text-spa-green/80 leading-relaxed">Harmonização e redução de edemas faciais, devolvendo a juventude e a definição aos traços do rosto.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 p-6 bg-transparent">
              <div className="w-16 h-16 rounded-full bg-spa-sand border border-white/80 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-spa-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-spa-green">Restabelecimento Profundo</h3>
              <p className="text-base text-spa-green/80 leading-relaxed">Uma pausa absoluta. Alívio de tensões acumuladas para um reequilíbrio físico e mental completo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="w-full bg-spa-green flex flex-col items-center py-20 lg:py-32 px-6 lg:px-24">
        <div className="w-full max-w-6xl flex flex-col gap-20 lg:gap-32">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <div className="relative w-full h-full min-h-[450px] max-w-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  src="/simone-perfil.jpg" 
                  alt="Simone Anselmini" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-6">
              <h2 className="text-3xl lg:text-5xl font-serif text-spa-gold leading-tight">A Maestria por trás do Método</h2>
              <p className="text-lg text-spa-sand font-sans leading-relaxed">Simone Anselmini não entrega apenas protocolos de massagem; entrega transformações. Com atendimento altamente personalizado, cada sessão é uma experiência exclusiva, adaptada milimetricamente à anatomia e às exigências de quem não abre mão do absoluto melhor.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-16">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full h-full min-h-[450px] max-w-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  src="/massage2.jpeg" 
                  alt="Procedimento Touch Up Massage" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-6">
              <h2 className="text-3xl lg:text-5xl font-serif text-spa-gold leading-tight">O Padrão de Excelência</h2>
              <p className="text-lg text-spa-sand font-sans leading-relaxed">Nossa equipe opera sob rigorosa curadoria técnica. Cada profissional domina os fundamentos da Touch Up Massage para garantir o mesmo nível de precisão, exclusividade e discrição que assina a marca Simone Anselmini.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Menu Section */}
      <section className="w-full bg-spa-sand flex flex-col items-center py-20 lg:py-32 px-6 lg:px-24">
        <h2 className="text-3xl lg:text-5xl font-serif text-spa-green mb-16 text-center">Protocolos e Investimento</h2>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col w-full">
            <h3 className="text-xl lg:text-2xl font-serif text-spa-green mb-8 text-center md:text-left border-b border-spa-green/20 pb-4">Com a Simone</h3>
            <ul className="flex flex-col w-full">
              {["60 minutos corporal", "50 minutos facial", "90 minutos corporal", "90 minutos corporal e facial", "120 minutos corporal e facial"].map((service, idx) => (
                <li key={`simone-${idx}`} className="flex justify-between items-center py-4 border-b border-spa-green/10 last:border-0 group">
                  <span className="text-lg text-spa-green/80 font-sans font-light tracking-wide group-hover:text-spa-green transition-colors">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-xl lg:text-2xl font-serif text-spa-green mb-8 text-center md:text-left border-b border-spa-green/20 pb-4">Com a Equipe</h3>
            <ul className="flex flex-col w-full">
              {["60 minutos corporal", "50 minutos facial", "90 minutos corporal", "90 minutos corporal e facial", "120 minutos corporal e facial"].map((service, idx) => (
                <li key={`equipe-${idx}`} className="flex justify-between items-center py-4 border-b border-spa-green/10 last:border-0 group">
                  <span className="text-lg text-spa-green/80 font-sans font-light tracking-wide group-hover:text-spa-green transition-colors">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Resultados Reais Section ── */}
      <section className="w-full bg-white/40 backdrop-blur-sm flex flex-col items-center py-20 lg:py-32 px-6 lg:px-24 overflow-hidden">
        <div className="w-full max-w-6xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.3em] text-spa-terracota font-sans mb-3 animate-fade-in-up">Transformações comprovadas</span>
          <h2 className="text-3xl lg:text-5xl font-serif text-spa-green mb-4 text-center animate-fade-in-up">
            Resultados Reais
          </h2>
          <p className="text-base lg:text-lg text-spa-green/70 font-sans text-center mb-14 max-w-xl animate-fade-in-up">
            Cada resultado é único. Veja como as técnicas Touch Up transformam silhuetas e devolvem confiança.
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="w-full carousel-wrapper">
          <div className="carousel-track">
            {/* Card 1 – Drenagem Linfática */}
            {[
              { img: "/antes-depois-drenagem.png", label: "Drenagem Linfática de Alta Performance" },
              { img: "/antes-depois-facial.png",   label: "Lifting Natural Facial" },
              { img: "/antes-depois-drenagem.png", label: "Escultura Corporal" },
              { img: "/antes-depois-facial.png",   label: "Redução de Edema Pós-Operatório" },
              /* Duplicate set for seamless loop */
              { img: "/antes-depois-drenagem.png", label: "Drenagem Linfática de Alta Performance" },
              { img: "/antes-depois-facial.png",   label: "Lifting Natural Facial" },
              { img: "/antes-depois-drenagem.png", label: "Escultura Corporal" },
              { img: "/antes-depois-facial.png",   label: "Redução de Edema Pós-Operatório" },
            ].map((item, idx) => (
              <figure
                key={idx}
                className="flex-shrink-0 flex flex-col items-center gap-4"
              >
                {/* Image frame */}
                <div className="relative w-[280px] sm:w-[340px] lg:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/60">
                  <Image
                    src={item.img}
                    alt={`Resultado: ${item.label}`}
                    fill
                    className="object-cover"
                  />
                  {/* ANTES / DEPOIS labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex">
                    <span className="flex-1 text-center text-xs font-sans font-medium tracking-widest py-1.5 bg-spa-green/70 text-spa-sand backdrop-blur-sm">
                      ANTES
                    </span>
                    <span className="flex-1 text-center text-xs font-sans font-medium tracking-widest py-1.5 bg-spa-terracota/80 text-white backdrop-blur-sm">
                      DEPOIS
                    </span>
                  </div>
                </div>
                {/* Caption */}
                <figcaption className="text-sm font-sans text-spa-green/60 italic tracking-wide">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Depoimentos Section ── */}
      <section className="w-full bg-spa-green flex flex-col items-center py-20 lg:py-32 px-6 lg:px-24">
        <div className="w-full max-w-6xl flex flex-col items-center">

          {/* Section header */}
          <span className="text-xs uppercase tracking-[0.3em] text-spa-gold/70 font-sans mb-3">
            Prova social
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif text-spa-sand mb-4 text-center">
            A Escolha de Nossas Clientes
          </h2>
          <p className="text-base lg:text-lg text-spa-sand/60 font-sans text-center mb-16 max-w-xl">
            Experiências reais de quem já transformou seu corpo e sua autoestima.
          </p>

          {/* ── Bloco A: Text Testimonials Grid ── */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

            {/* Card 1 */}
            <article className="testimonial-card">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg ring-2 ring-spa-gold/40 flex-shrink-0">
                <Image
                  src="/avatar-cliente-1.png"
                  alt="Mariana Costa"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="star-rating" aria-label="5 estrelas">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-base text-spa-green/85 font-sans leading-relaxed italic z-10 px-2">
                A massagem da Simone é completamente diferente de tudo que já experimentei. Em apenas duas sessões, meu abdômen desinflou visivelmente. Indico para todas as minhas amigas!
              </p>
              <div>
                <p className="font-semibold text-spa-green text-sm">Mariana Costa</p>
                <p className="text-xs text-spa-green/50 tracking-wide">@mariana.costa</p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="testimonial-card">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg ring-2 ring-spa-gold/40 flex-shrink-0">
                <Image
                  src="/avatar-cliente-2.png"
                  alt="Fernanda Lima"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="star-rating" aria-label="5 estrelas">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-base text-spa-green/85 font-sans leading-relaxed italic z-10 px-2">
                Fui por indicação e saí completamente apaixonada. O ambiente é impecável, a Simone é uma artista. Meu rosto ficou visivelmente mais definido depois do lifting facial.
              </p>
              <div>
                <p className="font-semibold text-spa-green text-sm">Fernanda Lima</p>
                <p className="text-xs text-spa-green/50 tracking-wide">@fer.lima_oficial</p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="testimonial-card">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg ring-2 ring-spa-gold/40 flex-shrink-0">
                <Image
                  src="/avatar-cliente-3.png"
                  alt="Beatriz Nunes"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="star-rating" aria-label="5 estrelas">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-base text-spa-green/85 font-sans leading-relaxed italic z-10 px-2">
                Vale cada centavo! A técnica dela é única — ao mesmo tempo relaxante e com resultados estéticos reais. Minha silhueta mudou e minha autoestima foi às alturas.
              </p>
              <div>
                <p className="font-semibold text-spa-green text-sm">Beatriz Nunes</p>
                <p className="text-xs text-spa-green/50 tracking-wide">@bia.nunes_fit</p>
              </div>
            </article>

          </div>{/* /grid */}

          {/* ── Bloco B: Video Testimonials ── */}
          <div className="w-full flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.3em] text-spa-gold/70 font-sans mb-3">
              Depoimentos em vídeo
            </span>
            <h3 className="text-2xl lg:text-3xl font-serif text-spa-sand mb-10 text-center">
              Ouça de quem viveu a experiência
            </h3>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

              {/* Video 1 — swap src with real video path when available */}
              <VideoPlayer
                poster="/video-poster-1.png"
                caption="‘A melhor drenagem que já fiz na vida.’ — Cliente, sessão corporal 90 min"
                label="Reproduzir depoimento em vídeo 1"
              />

              {/* Video 2 — swap src with real video path when available */}
              <VideoPlayer
                poster="/video-poster-2.png"
                caption="‘Saí completamente transformada.’ — Cliente, lifting facial"
                label="Reproduzir depoimento em vídeo 2"
              />

            </div>
          </div>{/* /video block */}

        </div>
      </section>

      {/* ── Quem Sou Eu Section ── */}
      <section className="w-full bg-spa-sand flex flex-col items-center py-20 lg:py-32 px-6 lg:px-24">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left column – Profile image */}
          <div className="flex justify-center md:justify-start animate-fade-in-left">
            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-white/70">
              <Image
                src="/massoterapeuta-perfil.png"
                alt="Simone Anselmini – massoterapeuta"
                fill
                className="object-cover"
              />
              {/* Subtle warm overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-spa-green/30 to-transparent" />
            </div>
          </div>

          {/* Right column – Bio text */}
          <div className="flex flex-col gap-7 animate-fade-in-right">
            <span className="text-xs uppercase tracking-[0.3em] text-spa-terracota font-sans">A profissional por trás do método</span>
            <h2 className="text-3xl lg:text-5xl font-serif text-spa-green leading-tight">
              Quem cuida de você
            </h2>

            <p className="text-base lg:text-lg text-spa-green/80 font-sans leading-relaxed">
              {/* Parágrafo 1 – Insira aqui sua apresentação pessoal */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo, in commodo orci. Sed volutpat mi nec orci malesuada.
            </p>
            <p className="text-base lg:text-lg text-spa-green/80 font-sans leading-relaxed">
              {/* Parágrafo 2 – Insira aqui sua formação e experiência */}
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
            <p className="text-base lg:text-lg text-spa-green/80 font-sans leading-relaxed">
              {/* Parágrafo 3 – Insira aqui sua missão e valores */}
              Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna.
            </p>

            {/* Styled signature */}
            <div className="mt-4 flex flex-col gap-1">
              <span className="signature-text">Simone Anselmini</span>
              <span className="text-xs font-sans text-spa-green/50 tracking-widest uppercase mt-1">
                Massoterapeuta &amp; Fundadora
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-[#fdfaf5] flex flex-col items-center py-20 lg:py-32 px-6 lg:px-24">
        <h2 className="text-3xl lg:text-4xl font-serif text-spa-green mb-12 lg:mb-16 text-center">Por Que Escolher Touch Up Massage?</h2>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col gap-3"><h3 className="text-xl font-serif text-spa-green">Técnica Exclusiva</h3><p className="text-lg text-spa-green/80 font-sans leading-relaxed">Método autoral e sofisticado que respeita a fisiologia, unindo contorno estético e relaxamento absoluto.</p></div>
          <div className="flex flex-col gap-3"><h3 className="text-xl font-serif text-spa-green">Resultados Imediatos</h3><p className="text-lg text-spa-green/80 font-sans leading-relaxed">Redução drástica de edemas e aprimoramento do contorno corporal desde a primeira experiência.</p></div>
          <div className="flex flex-col gap-3"><h3 className="text-xl font-serif text-spa-green">Alta Expertise</h3><p className="text-lg text-spa-green/80 font-sans leading-relaxed">Profissionais submetidos a uma rigorosa supervisão técnica, assegurando um padrão inegociável de qualidade.</p></div>
          <div className="flex flex-col gap-3"><h3 className="text-xl font-serif text-spa-green">Flexibilidade de Protocolos</h3><p className="text-lg text-spa-green/80 font-sans leading-relaxed">Diferentes tempos de sessão estruturados para se adequar a rotinas exigentes.</p></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-spa-green flex flex-col items-center py-16 px-6 lg:px-24 border-t border-white/5">
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-3xl font-serif text-spa-gold">Simone Anselmini&reg;</span>
            <p className="text-sm text-spa-sand/80 font-sans">Touch Up Massage &mdash; Transformando bem-estar em resultados.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
            <a 
              href="#agendamento"
              className="inline-block px-8 py-4 bg-spa-green border border-[#e7b07a] text-[#e7b07a] font-bold text-base rounded-lg transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 text-center"
            >
              Consultar Disponibilidade
            </a>
            <span className="text-xs text-spa-sand/50 font-sans mt-2">&copy; 2026 Simone Anselmini. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5500000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-spa-green rounded-full p-4 lg:p-5 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Agendar via WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#e7b07a]">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.183-.573c.978.582 1.994.981 3.145.981 3.182 0 5.768-2.586 5.768-5.766 0-3.181-2.586-5.767-5.765-5.767zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.689c-4.276 0-7.744 3.468-7.745 7.744 0 1.369.356 2.704 1.034 3.882l-1.111 4.062 4.156-1.09c1.134.629 2.41 .961 3.714.961 4.276 0 7.744-3.468 7.745-7.745 0-4.276-3.467-7.744-7.744-7.744z"/>
        </svg>
      </a>
    </main>
  );
}
