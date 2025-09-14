import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Headphones,
  Building,
  Send
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email within 24 hours",
    details: [
  "General Inquiries: info@fasalsetu.india.gov.in",
  "Technical Support: support@fasalsetu.india.gov.in",
  "Feedback: feedback@fasalsetu.india.gov.in"
    ]
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us during business hours",
    details: [
      "Helpline: 1800-425-1111 (Toll Free)",
      "Technical: +91-471-2518100",
      "Emergency: +91-471-2518200"
    ]
  },
  {
    icon: MapPin,
    title: "Office Address",
    description: "Visit us at our headquarters",
    details: [
      "Department of Agriculture",
      "Government Secretariat",
      "Thiruvananthapuram - 695001",
  "India"
    ]
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "We're available during these hours",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Closed",
      "Emergency: 24/7 Available"
    ]
  }
];

const supportChannels = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    availability: "Available 9 AM - 6 PM",
    action: "Start Chat"
  },
  {
    icon: Headphones,
    title: "Call Support",
    description: "Talk to our experts over the phone",
    availability: "Available 9 AM - 6 PM",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Ticket",
    description: "Submit a detailed support request",
    availability: "Response within 24 hours",
    action: "Send Email"
  }
];

const regionalOffices = [
  {
  region: "Northern India",
    office: "Kasaragod Agricultural Office",
    address: "Agricultural Complex, Kasaragod - 671121",
    phone: "+91-4994-220100",
  email: "north.agri@india.gov.in"
  },
  {
  region: "Central India", 
    office: "Thrissur Agricultural Office",
    address: "Agricultural Complex, Thrissur - 680121",
    phone: "+91-487-2420100",
  email: "central.agri@india.gov.in"
  },
  {
  region: "Southern India",
    office: "Kollam Agricultural Office", 
    address: "Agricultural Complex, Kollam - 691001",
    phone: "+91-474-2750100",
  email: "south.agri@india.gov.in"
  }
];

export default function Contact() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{t('contact.badge')}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        {/* Contact Form & Info */}
      

        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {info.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    {info.details.map((detail, idx) => (
                      <div key={idx}>{detail}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      
    

        {/* FAQ CTA */}
        <section className="hero-gradient rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Check out our frequently asked questions or contact our support team 
            for personalized assistance with your agricultural needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-hero">
              View FAQ
            </Button>
     
          </div>
        </section>
      </div>
    </div>
  );
}