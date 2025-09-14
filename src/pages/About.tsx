                                                                import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const objectives = [
  {
    title: "Advanced Agricultural Technology",
  description: "Comprehensive digital solutions for India's farmers"
  },
  {
    title: "Data-Driven Insights", 
    description: "Empowering agricultural professionals with actionable intelligence"
  },
  {
    title: "Sustainable Agricultural Development",
    description: "Promoting eco-friendly and economically viable farming practices"
  },
  {
    title: "Digital Transformation",
    description: "Modernizing traditional farming methods through technology"
  }
];

const achievements = [
  { label: "Farmers Registered", value: "50,000+" },
  { label: "Districts Covered", value: "14/14" },
  { label: "Agricultural Schemes", value: "200+" },
  { label: "Success Stories", value: "1,000+" },
];

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{t('about.badge')}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="card-gradient border-0 shadow-primary">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                To create a user-friendly platform that seamlessly connects farmers, technology, 
                and agricultural innovation, empowering India's agricultural landscape through 
                digital transformation and sustainable practices.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 shadow-primary">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                To establish India as a model nation for technology-driven sustainable agriculture, 
                where every farmer has access to modern tools, knowledge, and resources needed 
                for prosperous and environmentally conscious farming.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Core Objectives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Core Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="border-l-4 border-l-primary bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{objective.title}</CardTitle>
                  <CardDescription className="text-base">
                    {objective.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center card-gradient border-0 shadow-primary">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Background & Origin */}
        <section className="hero-gradient rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Background & Origin</h2>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                FasalSetu was conceived as part of India's ambitious digital transformation initiative, 
                recognizing agriculture as the backbone of the nation's economy. With over 60% of the 
                population directly or indirectly dependent on agriculture, the need for technological 
                intervention became paramount.
              </p>
              
              <p>
                Launched under the auspices of the Department of Agriculture, Government of India, 
                FasalSetu represents a collaborative effort between agricultural scientists, technology 
                experts, and farming communities to create a comprehensive ecosystem for modern agriculture.
              </p>
              
              <p>
                The platform addresses key challenges including fragmented information systems, 
                limited access to modern farming techniques, market volatility, and the need for 
                sustainable agricultural practices in the face of climate change.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}