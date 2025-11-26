import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Target, TrendingUp, Shield, Clock, Users, Star, Percent, Timer, AlertTriangle, Gift, BookOpen } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import BonusSection from "@/components/BonusSection";
import { useEffect, useRef, useState } from "react";

const HOTMART_LINK = "https://pay.hotmart.com/Q101966304B";

const SalesPage = () => {
  const handleCTAClick = () => {
    window.open(HOTMART_LINK, '_blank');
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0 animated-bg opacity-30"></div>
        <div className="absolute inset-0">
          <img 
            src="https://metamove.com.br/wp-content/uploads/2025/11/hero.jpg" 
            alt="Professional confident in sales"
            className="w-full h-full object-cover object-center opacity-20"
            style={{ minHeight: '100vh' }}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up px-4">
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full bg-primary/20 border border-primary/30 text-primary-glow font-semibold mb-6 text-sm sm:text-base">
              <Zap className="w-4 h-4 mr-2" />
              Método Inovador
            </span>
          </div>
          
          <h1 className="text-[9vw] sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-2 break-words hyphens-auto [text-wrap:balance]">
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
              Guia Prático:
            </span>
            <br />
            <span className="text-foreground">
              Técnicas e Frases para Quebrar Objeções na Hora da Venda!
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-2 text-pretty break-words hyphens-auto [text-wrap:balance]">
            Aprenda técnicas práticas para lidar melhor com objeções e <span className="text-accent font-semibold">potencialmente aumentar</span> suas vendas
          </p>
          
          <div className="mb-12">
            <p className="text-base sm:text-lg text-primary-glow mb-8 font-medium px-2">
              Método prático para lidar com objeções e aumentar suas chances de fechar vendas.
            </p>
            
            <Button 
              onClick={handleCTAClick}
              variant="hero" 
              className="w-full sm:w-auto animate-float hover:animate-none px-6 py-4 md:px-12 md:py-8 lg:px-16 lg:py-10 text-xl md:text-2xl lg:text-3xl max-w-[95%] sm:max-w-none mx-auto font-bold whitespace-normal leading-tight min-h-fit h-auto"
            >
              <Zap className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 mr-3 flex-shrink-0" />
              <span className="text-center">Quero aprender a lidar com objeções</span>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-accent" />
              7 dias de garantia
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-accent" />
              Acesso imediato
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-accent" />
              +1000 alunos satisfeitos
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Para quem é o <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Altas Vendas</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "👨‍💼", title: "Vendedores", description: "Profissionais que querem aumentar suas conversões" },
              { icon: "📊", title: "Gestores", description: "Líderes que precisam melhorar os resultados da equipe" },
              { icon: "🚀", title: "Autônomos", description: "Profissionais independentes que vendem seus serviços" },
              { icon: "💻", title: "Empreendedores", description: "Donos de negócios digitais ou físicos" }
            ].map((audience, index) => (
              <Card key={index} className="glow-card p-6 text-center hover-lift scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-4">{audience.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{audience.title}</h3>
                <p className="text-sm text-muted-foreground">{audience.description}</p>
              </Card>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground">
            <span className="text-accent font-semibold">Para todos</span> que de alguma forma estão ligados ao mundo das vendas e querem dominar a arte de quebrar objeções
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Por que este <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">método funciona?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Técnicas baseadas em estudos que podem ajudar a melhorar suas vendas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Transforme objeções em oportunidades",
                description: "Converta cada 'não' em uma nova chance de fechamento"
              },
              {
                icon: TrendingUp,
                title: "Aumente sua taxa de fechamento",
                description: "Melhore significativamente seus resultados de vendas"
              },
              {
                icon: Zap,
                title: "Método simples e direto",
                description: "Técnicas práticas que funcionam na vida real"
              },
              {
                icon: Clock,
                title: "Aprendizado sem enrolação",
                description: "Conteúdo objetivo focado em resultados rápidos"
              }
            ].map((benefit, index) => (
              <Card key={index} className="glow-card p-6 text-center energy-border hover-lift scroll-reveal" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O que nossos <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">alunos dizem</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Resultados reais de pessoas reais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "João Silva",
                role: "Vendedor Autônomo",
                content: "Minha taxa de conversão aumentou 180% em apenas 2 semanas. O método é simplesmente revolucionário!",
                rating: 5
              },
              {
                name: "Maria Santos",
                role: "Consultora de Vendas",
                content: "Finalmente encontrei uma forma prática de lidar com objeções. Agora cada 'não' virou uma oportunidade.",
                rating: 5
              },
              {
                name: "Carlos Oliveira",
                role: "Empresário",
                content: "Conteúdo direto ao ponto, sem enrolação. Aplicei as técnicas e os resultados apareceram imediatamente.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glow-card p-6 hover-lift scroll-reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Explanation */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0">
          <img 
            src="https://metamove.com.br/wp-content/uploads/2025/11/tech.jpg" 
            alt="Tech pattern background"
            className="w-full h-full object-cover object-center opacity-10"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O que você vai aprender dentro do <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Altas Vendas</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Mockup */}
            <div className="order-2 lg:order-1 text-center scroll-reveal">
              <img 
                src="https://metamove.com.br/wp-content/uploads/2025/11/product.png" 
                alt="Altas Vendas - Ebook e versão digital"
                className="max-w-full h-auto mx-auto animate-float"
                style={{ maxHeight: '600px', objectFit: 'contain' }}
              />
            </div>

            {/* Content List */}
            <div className="order-1 lg:order-2 space-y-6 scroll-reveal">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20 mb-8 hover-lift">
                <h3 className="text-2xl font-bold text-foreground mb-4">📚 Guia Prático de 10 Dias</h3>
                <p className="text-muted-foreground">
                  Um cronograma completo para dominar todas as técnicas de quebra de objeções em apenas 10 dias
                </p>
              </div>

              <div className="grid md:grid-cols-1 gap-4">
                <h4 className="text-xl font-bold text-accent mb-2">🎯 Objeções que você vai aprender a quebrar:</h4>
                {[
                  '"Está caro"',
                  '"Vou pensar"',
                  '"Não tenho dinheiro"',
                  '"Preciso de mais tempo"',
                  '"Não confio"',
                  '"Não preciso disso agora"',
                  '"Vou pesquisar mais"',
                  '"Preciso falar com meu marido/esposa"'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-foreground text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <BonusSection />

      {/* Offer Section with Price Leverage */}
      <section className="py-20 px-3 md:px-4 relative overflow-hidden scroll-reveal">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 via-accent/5 to-primary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-2 md:px-0">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-destructive/20 to-red-600/20 border border-destructive/30 rounded-full">
              <AlertTriangle className="w-5 h-5 text-destructive animate-bounce" />
              <span className="text-destructive font-bold text-lg uppercase tracking-wide">
                🔥 Promoção Relâmpago
              </span>
              <AlertTriangle className="w-5 h-5 text-destructive animate-bounce" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient bg-gradient-to-r from-destructive via-accent to-primary bg-clip-text text-transparent">
                Última Chance!
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Esta oferta possui tempo limitado!
            </p>
          </div>

          <div className="grid gap-8 items-start max-w-4xl mx-auto">
            {/* Timer Section */}
            <div className="order-2 lg:order-1">
              <Card className="glow-card p-4 md:p-6 lg:p-8 energy-border bg-gradient-to-br from-card to-muted/30 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full overflow-hidden">
                <CountdownTimer />
                
                <div className="mt-4 md:mt-6 space-y-3">
                  <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <Percent className="w-3 h-3 md:w-4 md:h-4 text-destructive" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm md:text-base">Economia de 55%</p>
                      <p className="text-xs md:text-sm text-muted-foreground">Você economiza R$ 80,00 nesta oferta</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Timer className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm md:text-base">Acesso Imediato</p>
                      <p className="text-xs md:text-sm text-muted-foreground">Comece a aplicar o método hoje mesmo</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm md:text-base">Risco Zero</p>
                      <p className="text-xs md:text-sm text-muted-foreground">7 dias de garantia total</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Price Section */}
            <div className="order-1 lg:order-2 px-2 md:px-0">
              <Card className="glow-card p-4 md:p-6 lg:p-8 energy-border relative overflow-hidden mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">
                {/* Discount badge */}
                <div className="absolute top-2 right-2 md:-top-3 md:-right-3 w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-destructive to-red-600 rounded-full flex items-center justify-center transform md:rotate-12 shadow-xl z-10">
                  <div className="text-center">
                    <div className="text-white font-bold text-xs md:text-sm leading-none">55%</div>
                    <div className="text-white text-xs uppercase">OFF</div>
                  </div>
                </div>

                <div className="text-center mb-4 md:mb-6 lg:mb-8 relative z-0">
                  <p className="text-xs md:text-sm text-muted-foreground mb-2 uppercase tracking-wide">De</p>
                  <div className="relative inline-block mb-3 md:mb-4">
                    <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground line-through opacity-60">
                      R$ 147,00
                    </span>
                    <div className="absolute inset-0 bg-destructive/20 transform -rotate-12 rounded"></div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-destructive font-bold mb-3 md:mb-4 uppercase tracking-wide pulse-urgency">
                    🎯 Por Apenas
                  </p>
                  
                  <div className="mb-3 md:mb-4 lg:mb-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 flex-wrap max-w-full">
                      <span className="text-lg md:text-2xl lg:text-3xl text-muted-foreground">9x de</span>
                      <div className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none" style={{ color: '#F0C75E' }}>
                        R$ 8,80
                      </div>
                    </div>
                    <p className="text-sm md:text-lg lg:text-xl text-muted-foreground text-center mb-3">
                      ou <span className="text-foreground font-bold text-lg md:text-xl lg:text-2xl">R$ 67,00</span> à vista
                    </p>
                    <div className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-2 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full pulse-urgency max-w-full">
                      <span className="text-green-400 font-bold text-xs md:text-sm text-center">💰 Economize R$ 80,00 nesta oferta</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-xs md:text-sm lg:text-base mb-4 md:mb-6 lg:mb-8">
                    Pagamento único • Acesso vitalício • Sem mensalidades
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                  <div className="flex items-center justify-center mb-3 md:mb-4 lg:mb-6">
                    <div className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-2 bg-accent/20 border border-accent/30 rounded-full max-w-full">
                      <Shield className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-accent" />
                      <span className="text-accent font-semibold text-xs md:text-sm text-center">Garantia de 7 dias ou seu dinheiro de volta</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleCTAClick}
                    variant="hero" 
                    size="xl"
                    className="w-full relative group animate-pulse hover:animate-none text-lg md:text-xl lg:text-2xl h-auto py-5 md:py-7 lg:py-9 whitespace-normal"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 to-accent/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative flex items-center justify-center gap-3 md:gap-4 lg:gap-5 px-4">
                      <span className="text-2xl md:text-3xl lg:text-4xl flex-shrink-0">🚀</span>
                      <span className="font-bold text-center leading-tight">Quero Aproveitar Esta Oferta Agora</span>
                      <Zap className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex-shrink-0" />
                    </div>
                  </Button>

                  <div className="text-center space-y-1">
                    <p className="text-xs text-muted-foreground">
                      ✅ Pagamento seguro via Hotmart
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ⚡ Acesso liberado automaticamente após o pagamento
                    </p>
                    <p className="text-xs text-destructive font-semibold animate-pulse">
                      ⏰ Esta oferta expira em poucos minutos!
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Urgency Elements */}
          <div className="mt-8 md:mt-12 text-center px-4">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-destructive/10 to-red-600/10 border border-destructive/20 rounded-xl max-w-full">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                <span className="text-destructive font-bold text-sm md:text-base">ATENÇÃO:</span>
              </div>
              <span className="text-foreground text-sm md:text-base text-center sm:text-left">
                Apenas <span className="text-destructive font-bold">23 vagas</span> restantes nesta promoção!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Não deixe mais nenhuma venda escapar por suas mãos
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Domine técnicas de vendas mais assertivas com um guia prático a qualquer momento que precisar
          </p>
          
          <Button 
            onClick={handleCTAClick}
            variant="hero" 
            size="xl"
            className="animate-pulse hover:animate-none"
          >
            <Zap className="w-6 h-6 mr-3" />
            Garantir meu acesso agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SalesPage;