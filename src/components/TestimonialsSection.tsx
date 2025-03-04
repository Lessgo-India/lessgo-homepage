
import React, { useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Event Planner",
    quote: "Lessgo has completely transformed how I coordinate events. The interface is intuitive and the features are exactly what I need.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    name: "Sarah Johnson",
    role: "Group Trip Organizer",
    quote: "Planning our annual friend trip used to be chaotic. With Lessgo, everyone stays on the same page and things run smoothly.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "Social Media Manager",
    quote: "The simplicity of Lessgo is its greatest strength. It does exactly what it promises without unnecessary complexity.",
    rating: 4,
    avatar: "/placeholder.svg"
  },
];

const TestimonialsSection = () => {
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
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-lessgo-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by organizers <span className="text-gradient">everywhere</span>
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our users have to say about Lessgo.
          </p>
        </div>
        
        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Star rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
