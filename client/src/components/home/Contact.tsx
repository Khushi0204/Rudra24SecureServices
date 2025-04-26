import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss your security and
              housekeeping needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-secondary mr-3 h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-medium">Head Office</h4>
                    <p className="text-gray-300">
                      Rudra House Plot No.72, Street No.2, Sunita Vihar
                      <br />
                      (Near Indira Puri 2 No) Loni, Ghaziabad (UP) 201102
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-secondary mr-3 h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-medium">Branch Offices</h4>
                    <p className="text-gray-300">
                      Delhi, Noida, Ghaziabad, Faridabad, Gurugram, Sonipat, etc.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-secondary mr-3 h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-300">
                      9625785431, 9625729177, 9625724855
                      <br />
                      Branch: 8860430007, 9999881949
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-secondary mr-3 h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-300">
                      <a href="mailto:Rudra24securegroup@gmail.com" className="hover:text-yellow-300">
                        Rudra24securegroup@gmail.com
                      </a>
                      <br />
                      <a href="mailto:rudra24securepl@gmail.com" className="hover:text-yellow-300">
                        rudra24securepl@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-secondary mr-3 h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-medium">Hours</h4>
                    <p className="text-gray-300">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      24/7 Security Services Available
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-white hover:text-secondary transition"
                    >
                      <i className="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-secondary transition"
                    >
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-secondary transition"
                    >
                      <i className="fab fa-linkedin-in text-xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-secondary transition"
                    >
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid grid-cols-1 gap-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Name <span className="text-secondary">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-gray-700 bg-primary-light text-white focus:ring-secondary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Email <span className="text-secondary">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="border-gray-700 bg-primary-light text-white focus:ring-secondary"
                          />
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
                        <FormLabel className="text-sm font-medium">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            className="border-gray-700 bg-primary-light text-white focus:ring-secondary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Subject <span className="text-secondary">*</span>
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-gray-700 bg-primary-light text-white focus:ring-secondary">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="quote">
                              Request a Quote
                            </SelectItem>
                            <SelectItem value="service">
                              Service Inquiry
                            </SelectItem>
                            <SelectItem value="support">
                              Customer Support
                            </SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Message <span className="text-secondary">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            className="border-gray-700 bg-primary-light text-white focus:ring-secondary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    variant="secondary"
                    disabled={isSubmitting}
                    className="w-full hover:bg-secondary-light"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
