import { Hero } from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Database, Users, Smartphone, TrendingUp, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    icon: Leaf,
    title: "Smart Farming Solutions",
    description: "AI-powered recommendations for crop management, soil health, and sustainable practices.",
  },
  {
    icon: Database,
    title: "Agricultural Data Repository",
    description: "Comprehensive database of farming techniques, weather patterns, and market insights.",
  },
  {
    icon: Users,
    title: "Farmer Community",
    description: "Farmer to farmer knowledge exchange, share experiences, and learn from agricultural experts.",
  },
  {
    icon: Smartphone,
    title: "Mobile Technology",
    description: "Access all services through our user-friendly mobile application anytime, anywhere.",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Real-time market prices, demand forecasting, and supply chain optimization.",
  },
];

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('features.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-gradient border-0 shadow-primary hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Indian farmers who are already benefiting from FasalSetu's 
            innovative agricultural solutions.
          </p>
      
        </div>
      </section>
    </div>
  );
}