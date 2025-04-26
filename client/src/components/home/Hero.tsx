import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">
              Professional Security & Housekeeping Services
            </h2>
            <p className="text-xl mb-6">
              Comprehensive solutions to keep your property secure, clean, and
              well-maintained.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="hover:bg-secondary-light"
                asChild
              >
                <a href="#audit">Start Security Audit</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop"
              alt="Security professional at work"
              className="rounded-lg shadow-xl"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
