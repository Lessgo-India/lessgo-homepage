
import React, { useEffect } from "react";
import { 
  Calendar, 
  Users, 
  Image, 
  WalletCards, 
  Bell,
} from "lucide-react";

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-lessgo-500" />,
    title: "Planning and Organizing",
    description: "Create and manage events effortlessly with smart scheduling tools that adapt to your needs."
  },
  {
    icon: <Users className="h-6 w-6 text-lessgo-500" />,
    title: "Groups",
    description: "Bring your friends, family, or team together in organized groups for better coordination."
  },
  {
    icon: <Image className="h-6 w-6 text-lessgo-500" />,
    title: "Media Share",
    description: "Share photos, videos, and documents with your group members in real-time."
  },
  {
    icon: <WalletCards className="h-6 w-6 text-lessgo-500" />,
    title: "Balances Tracking",
    description: "Keep track of shared expenses and settle debts easily within your groups."
  },
  {
    icon: <Bell className="h-6 w-6 text-lessgo-500" />,
    title: "Status and Updates",
    description: "Stay informed with real-time status updates and notifications from your groups."
  },
];

const FeaturesSection = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Initial check
    animateOnScroll();

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <section id="features" className="py-16 md:py-24 relative">
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-lessgo-50 dark:bg-lessgo-900/20 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lessgo-100/30 dark:bg-lessgo-800/20 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to <span className="text-gradient">plan your day</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Lessgo combines powerful features with beautiful design to make organizing your life effortless.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-on-scroll dark:bg-gray-800/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-lessgo-100 dark:bg-lessgo-900/50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
