import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Cloud,
  ShoppingCart,
  FileText,
  Users,
  BarChart3,
  Lightbulb,
  Calendar,
  Tractor,
  Sprout,
  Plane,

} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const mainServices = [
  {
    icon: Leaf,
    title: "Crop Management",
    description:
      "AI-powered crop recommendations, disease detection, and yield optimization",
    features: [
      "Smart crop planning",
      "Pest & disease alerts",
      "Irrigation scheduling",
      "Harvest timing",
    ],
  },
  {
    icon: Cloud,
    title: "Weather Intelligence",
    description:
      "Hyperlocal weather forecasts and climate data for informed farming decisions",
    features: [
      "7-day weather forecast",
      "Rainfall predictions",
      "Temperature alerts",
      "Humidity and Wind speed",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Market intelligence & advisory  ",
    description:
      "Direct market access, price discovery, and supply chain management",
    features: [
      "Real-time prices",
      "Buyer connections",
      "Quality certification",
      "Logistics support",
    ],
  },
  {
   icon: Sprout,
    title: "Soil Health Monitoring",
    description:
      "AI-driven soil analysis for sustainable and productive farming",
    features: [
      "Soil pH and moisture monitoring",
      "Fertilizer Calculator",
      "Long-term soil health tracking",
      "Personalized soil improvement tips",
    ],
  },
];

const additionalServices = [
  {
    icon: FileText,
    title: "Scheme Information",
    description:
      "Complete information about government agricultural schemes and subsidies",
    category: "Government Services",
  },
  {
    icon: Users,
    title: "Farmer Community",
    description:
      "Connect with fellow farmers, share experiences, and get expert advice",
    category: "Community",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Detailed analytics on farming performance, costs, and profitability",
    category: "Analytics",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description:
      "Latest agricultural technologies, innovations, and research updates",
    category: "Research",
  },

  {
    icon: Calendar,
    title: "Agricultural Calendar",
    description:
      "Season-wise farming calendar with important dates and activities",
    category: "Planning",
  },
  {
    icon: Sprout,
    title: "Sustainable Solutions",
    description:
      "Eco-friendly practices and water-saving tips for sustainable farming.",
    category: "Environment",
  },
  {
    icon: Tractor,
    title: "Farm Equipment Advisory",
    description: "Suggests suitable machinery for crops and farm size",
    category: " Efficiency & Technology",
  },
];

export default function Services() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Agricultural Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("services.description")}
          </p>
        </div>
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core Services
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="card-gradient border-0 shadow-primary hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Other Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {service.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="hero-gradient rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Access These Services?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Download the FasalSetu mobile app or register on our platform to
            start accessing all these comprehensive agricultural services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-hero">
              Download Mobile App
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
