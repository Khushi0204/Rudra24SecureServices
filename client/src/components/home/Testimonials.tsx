import { Star } from "lucide-react";

const testimonials = [
  {
    text: "The security audit provided by SecureGuard was incredibly thorough. We implemented their recommendations and have seen a 60% reduction in security incidents at our retail locations.",
    author: "Michael Rodriguez",
    position: "Retail Chain Manager",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    text: "Their housekeeping staff are professional, thorough, and reliable. Our office has never looked better, and the enhanced cleaning protocols have reduced sick days among our employees.",
    author: "Sarah Johnson",
    position: "Office Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    text: "The security guards provided by SecureGuard are professional, well-trained, and attentive. They've become an integral part of our building's security infrastructure.",
    author: "David Wilson",
    position: "Property Manager",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4.5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what our clients have to say about our security and housekeeping
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-secondary flex">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="fill-current" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <Star className="fill-current w-1/2" />
                  )}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
