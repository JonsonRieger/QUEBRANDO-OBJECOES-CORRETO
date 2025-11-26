import { Card } from "@/components/ui/card";
import { Gift, Check, BookOpen } from "lucide-react";

const BonusSection = () => {
  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-destructive/20 to-accent/20 border border-destructive/30 rounded-full pulse-urgency">
            <Gift className="w-6 h-6 text-destructive" />
            <span className="text-destructive font-bold text-xl uppercase tracking-wide">
              🎁 Bônus Exclusivo
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-destructive via-accent to-primary bg-clip-text text-transparent">
              Tabela de Consulta Rápida
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seu arsenal completo de respostas prontas para cada objeção
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Visual Card */}
          <Card className="glow-card p-8 energy-border hover-lift scroll-reveal bg-gradient-to-br from-card to-primary/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-destructive to-accent flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">O Que Você Recebe</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-semibold mb-1">Tabela Completa de Objeções</p>
                  <p className="text-sm text-muted-foreground">Todas as objeções mais comuns organizadas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-semibold mb-1">Respostas Práticas</p>
                  <p className="text-sm text-muted-foreground">Scripts prontos para usar na hora H</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-semibold mb-1">Exemplos Reais</p>
                  <p className="text-sm text-muted-foreground">Casos práticos de como aplicar cada técnica</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Description Card */}
          <div className="space-y-6 scroll-reveal">
            <Card className="glow-card p-6 hover-lift shimmer">
              <h4 className="text-xl font-bold text-foreground mb-3">📊 Formato de Consulta Rápida</h4>
              <p className="text-muted-foreground leading-relaxed">
                Uma tabela prática e visual que apresenta <span className="text-accent font-semibold">as principais objeções</span>, 
                <span className="text-accent font-semibold"> como lidar com cada uma</span>, e 
                <span className="text-accent font-semibold"> um exemplo prático</span> de aplicação real.
              </p>
            </Card>

            <Card className="glow-card p-6 hover-lift bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <h4 className="text-xl font-bold text-foreground mb-3">⚡ Acesso Instantâneo</h4>
              <p className="text-muted-foreground leading-relaxed">
                Consulte quando precisar, na hora da negociação. Tenha sempre à mão a resposta perfeita para transformar 
                <span className="text-destructive font-semibold"> "não"</span> em 
                <span className="text-accent font-semibold"> "sim"</span>!
              </p>
            </Card>

            <div className="bg-gradient-to-r from-destructive/20 to-accent/20 p-6 rounded-lg border border-destructive/30">
              <div className="flex items-center gap-3 mb-3">
                <Gift className="w-6 h-6 text-destructive" />
                <h4 className="text-lg font-bold text-foreground">Valor do Bônus: R$ 97,00</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Mas hoje, você leva <span className="text-destructive font-bold">GRATUITAMENTE</span> junto com o Altas Vendas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
