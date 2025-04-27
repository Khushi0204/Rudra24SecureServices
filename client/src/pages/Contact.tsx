import { useState } from "react";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { PageFadeIn } from "@/components/shared/PageTransition";
import LocationMap from "@/components/shared/LocationMap";

// Define the contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Add admin emails to the data
      const contactData = {
        ...data,
        adminEmails: ["rudra24securegroup@gmail.com", "rudra24securepl@gmail.com"]
      };
      
      const response = await apiRequest("/api/contact", {
        method: "POST",
        body: JSON.stringify(contactData),
      });
      
      toast({
        title: "Message Sent!",
        description: "Your message has been successfully sent. We'll get back to you soon.",
      });
      
      form.reset();
      setSubmitted(true);
      
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Define service locations for the map
  const serviceLocations = [
    {
      id: 1,
      name: "Rudra 24 Secure Headquarters",
      address: "123 Security Plaza, New Delhi, India",
      coordinates: [28.6139, 77.2090], // Delhi coordinates
    },
    {
      id: 2,
      name: "Mumbai Office",
      address: "456 Safety Tower, Mumbai, India",
      coordinates: [19.0760, 72.8777], // Mumbai coordinates
    },
    {
      id: 3,
      name: "Bangalore Branch",
      address: "789 Protection Road, Bangalore, India",
      coordinates: [12.9716, 77.5946], // Bangalore coordinates
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <PageFadeIn>
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about our security services? Reach out to our team of experts who are ready to assist you 24/7.
            </p>
          </div>
        </PageFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <PageFadeIn delay={200}>
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Get in Touch</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700 mb-4">
                    Thank you for reaching out. Our team will get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What is your inquiry about?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide details about your security requirements" 
                              rows={5}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-700 hover:bg-blue-800 py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </PageFadeIn>

          <PageFadeIn delay={400}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-1">Phone</h3>
                      <p className="text-gray-600 mb-1">General Inquiries: +91 1234 567 890</p>
                      <p className="text-gray-600 mb-1">Emergency Response: +91 9876 543 210</p>
                      <p className="text-gray-600">Customer Support: +91 8765 432 109</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-1">Email</h3>
                      <p className="text-gray-600 mb-1">General Inquiries: rudra24securegroup@gmail.com</p>
                      <p className="text-gray-600 mb-1">Business Partnerships: rudra24securepl@gmail.com</p>
                      <p className="text-gray-600">Careers: careers@rudra24secure.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-1">Head Office</h3>
                      <p className="text-gray-600">
                        123 Security Plaza, Sector 62<br />
                        Noida, Uttar Pradesh 201301<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-1">Operating Hours</h3>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium">Office Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium">Customer Support:</span> 24/7
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Emergency Response:</span> 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-4">Follow Us</h3>
                
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </PageFadeIn>
        </div>

        <PageFadeIn delay={600}>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-16">
            <h2 className="text-2xl font-bold text-blue-800 p-6 bg-gray-50 border-b border-gray-200">Our Service Locations</h2>
            <div className="h-[500px] w-full">
              <LocationMap locations={serviceLocations} zoom={5} />
            </div>
          </div>
        </PageFadeIn>

        <PageFadeIn delay={800}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-blue-800 text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Request a Quote</h3>
              <p className="text-blue-100 mb-4">
                Get a customized security solution tailored to your specific requirements.
              </p>
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-blue-800"
                onClick={() => {
                  form.setValue("subject", "Request for Quote");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Request Now
              </Button>
            </div>
            
            <div className="bg-yellow-500 text-blue-900 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Emergency Contact</h3>
              <p className="text-blue-800 mb-4">
                Need immediate assistance? Our security teams are available 24/7.
              </p>
              <Button
                variant="outline"
                className="bg-transparent text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-yellow-500"
                asChild
              >
                <a href="tel:+919876543210">
                  Call Emergency Line
                </a>
              </Button>
            </div>
            
            <div className="bg-blue-50 text-blue-800 rounded-lg p-6 text-center border border-blue-100">
              <h3 className="text-xl font-semibold mb-3">Schedule a Consultation</h3>
              <p className="text-blue-700 mb-4">
                Discuss your security needs with our experts in a personalized session.
              </p>
              <Button
                className="bg-blue-700 hover:bg-blue-800 text-white"
                onClick={() => {
                  form.setValue("subject", "Security Consultation Request");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </PageFadeIn>
      </div>
    </div>
  );
}