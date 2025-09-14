import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Download, 
  Star, 
  Users, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  PlayCircle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    icon: Users,
    title: "Farmer Community",
  description: "Connect with 50,000+ farmers across India"
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Instant notifications on weather, prices, and schemes"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Government-backed platform with data security"
  },
  {
    icon: CheckCircle,
    title: "Expert Guidance",
    description: "Access to agricultural experts and advisors"
  }
];

const appStats = [
  { label: "Downloads", value: "1M+" },
  { label: "Active Users", value: "500K+" },
  { label: "App Rating", value: "4.8★" },
  { label: "Support Languages", value: "3" }
];

const screenshots = [
  {
    title: "Dashboard",
    description: "Overview of your farming activities and quick access to all features"
  },
  {
    title: "Weather Forecast",
    description: "Hyperlocal weather predictions for better farming decisions"
  },
  {
    title: "Market Prices",
  description: "Real-time crop prices from various markets across India"
  },
  {
    title: "Expert Chat",
    description: "Direct communication with agricultural experts and advisors"
  }
];

export default function FasalSetuApp() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Mobile Application</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('app.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {t('app.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-primary">
              <Download className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
            <Button size="lg" variant="outline">
              <PlayCircle className="mr-2 h-5 w-5" />
              View Demo
            </Button>
          </div>
        </div>

        {/* App Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {appStats.map((stat, index) => (
              <Card key={index} className="text-center card-gradient border-0 shadow-primary">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t('app.features.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* App Preview */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-80 h-[640px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-hero">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-primary-light rounded-[2.5rem] relative overflow-hidden">
                    {/* Phone Screen Content */}
                    <div className="absolute inset-6 bg-gradient-to-br from-green-50 to-green-100 rounded-[2rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="h-8 bg-primary flex items-center justify-between px-4 text-white text-xs">
                        <span>9:41</span>
                        <span>●●●●●</span>
                        <span>100%</span>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-6 space-y-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-2">
                            <span className="text-2xl font-bold text-white">K</span>
                          </div>
                          <h3 className="text-xl font-bold text-primary">Welcome Farmer!</h3>
                          <p className="text-sm text-green-700">Today's farming insights</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/70 p-3 rounded-lg text-center">
                            <div className="text-2xl font-bold text-primary">28°C</div>
                            <div className="text-xs text-green-700">Weather</div>
                          </div>
                          <div className="bg-white/70 p-3 rounded-lg text-center">
                            <div className="text-2xl font-bold text-primary">₹45</div>
                            <div className="text-xs text-green-700">Rice/kg</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="bg-white/70 p-3 rounded-lg">
                            <div className="text-sm font-medium text-primary">Today's Tasks</div>
                            <div className="text-xs text-green-700">Check irrigation system</div>
                          </div>
                          <div className="bg-white/70 p-3 rounded-lg">
                            <div className="text-sm font-medium text-primary">Weather Alert</div>
                            <div className="text-xs text-green-700">Light rain expected tomorrow</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6">All-in-One Farming Companion</h2>
              <div className="space-y-6">
                {screenshots.map((screen, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Smartphone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{screen.title}</h3>
                      <p className="text-sm text-muted-foreground">{screen.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="group">
                  Download Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Farmers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ravi Kumar",
                location: "Palakkad",
                rating: 5,
                review: "FasalSetu app has transformed my farming. Real-time weather updates and expert advice helped increase my yield by 30%."
              },
              {
                name: "Priya Nair",
                location: "Kottayam", 
                rating: 5,
                review: "The market price feature is incredible. I can now sell my crops at the best prices without middlemen exploitation."
              },
              {
                name: "Suresh Babu",
                location: "Thrissur",
                rating: 5,
                review: "Government schemes information is so well organized. I got subsidies worth ₹50,000 through this app."
              }
            ].map((review, index) => (
              <Card key={index} className="card-gradient border-0 shadow-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{review.review}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <section className="hero-gradient rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join over 1 million farmers who are already using FasalSetu app to make 
            smarter farming decisions and increase their income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-hero">
              <Download className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}