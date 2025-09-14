import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Users, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[80vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/25 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="container flex flex-col justify-center mx-auto px-4 relative z-10">
        <div className="gap-12 items-center">
          {/* Content */}
          <div className="text-center items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
              <span className="block text-2xl md:text-3xl lg:text-4xl font-medium mt-2 text-primary-foreground/90">
                {t('hero.subtitle')}
              </span>
            </h1>
            
            <div className="text-center md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white/30 text-black hover:bg-white/10">
                {t('common.downloadApp')}
                <Smartphone className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
               
            </div>
          </div>

          {/* Mobile App Mockup */}
          <div className="relative flex justify-center p-10 lg:p-0">
            <div className="relative">
              <div className="w-72 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-hero">
                <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-600 rounded-[2.5rem] relative overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-4 bg-gradient-to-br from-green-50 to-green-100 rounded-[2rem] flex flex-col items-center justify-center text-green-800">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                        <span className="text-2xl font-bold text-white">K</span>
                      </div>
                      <h3 className="text-xl font-bold">FasalSetu App</h3>
                      <p className="text-sm px-4 text-green-700">
                        Your complete agricultural companion for modern farming solutions
                      </p>
                      <div className="grid grid-cols-2 gap-4 px-6 pt-4">
                        <div className="bg-white/50 p-3 rounded-lg text-center">
                          <Users className="h-6 w-6 mx-auto mb-1" />
                          <div className="text-xs font-medium">Community</div>
                        </div>
                        <div className="bg-white/50 p-3 rounded-lg text-center">
                          <BarChart3 className="h-6 w-6 mx-auto mb-1" />
                          <div className="text-xs font-medium">Analytics</div>
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
        </div>
      </div>
      </div>
    </section>
  );
};