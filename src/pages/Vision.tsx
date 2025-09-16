import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sun, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Vision() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Sun,
      title: t("vision.highlight1.title"),
      description: t("vision.highlight1.desc"),
    },
    {
      icon: Users,
      title: t("vision.highlight2.title"),
      description: t("vision.highlight2.desc"),
    },
    {
      icon: Leaf,
      title: t("vision.highlight3.title"),
      description: t("vision.highlight3.desc"),
    },
    {
      icon: TrendingUp,
      title: t("vision.highlight4.title"),
      description: t("vision.highlight4.desc"),
    },
  ];

  return (
    <div className="min-h-screen py-10 bg-gradient-to-b from-emerald-50 to-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Badge variant="secondary" className="mb-4">{t("vision.badge")}</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Building the Future of <span className="text-emerald-600">Indian Agriculture</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              As part of the Digital India initiative, FasalSetu is committed to revolutionizing agriculture through accessible AI technology. Our vision is to create a prosperous, sustainable, and technology-driven agricultural sector that ensures food security and farmer welfare.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56f6d2d8c0ce?q=80&w=1600&auto=format&fit=crop"
              alt="Sunrise over fields"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {highlights.map((item, idx) => (
            <Card key={idx} className="bg-white/70 backdrop-blur border-emerald-100 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{item.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Trust Marks */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">100%</div>
            <div className="text-sm text-muted-foreground">Free for Farmers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">100M+</div>
            <div className="text-sm text-muted-foreground">Target Farmers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">100%</div>
            <div className="text-sm text-muted-foreground">Government Backed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

