import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageFadeIn } from "@/components/shared/PageTransition";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, Gift, ChevronsRight, Copy, Check } from "lucide-react";

// Define the form schema
const referralSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  referralName: z.string().min(2, { message: "Referral name must be at least 2 characters." }),
  referralPhone: z.string().min(10, { message: "Referral phone must be at least 10 digits." }),
  referralEmail: z.string().email({ message: "Please enter a valid email address." }),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof referralSchema>;

export default function ReferralAndRewards() {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      referralName: "",
      referralPhone: "",
      referralEmail: "",
      notes: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Submit referral data to backend
      const response = await fetch("/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          adminEmails: ["rudra24securegroup@gmail.com", "rudra24securepl@gmail.com"]
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Referral Submitted!",
          description: "Your referral has been successfully submitted. We'll contact you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your referral. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your referral. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText("RUDRA24SECURE");
    setIsCopied(true);
    
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
    
    toast({
      title: "Referral Code Copied!",
      description: "Your referral code has been copied to clipboard.",
    });
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <PageFadeIn>
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Referral Program & Rewards</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Refer your friends and family to our security services and earn exclusive rewards. Your trust in us is our biggest achievement.
            </p>
          </div>
        </PageFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <PageFadeIn delay={200}>
            <Card className="shadow-lg border-blue-100 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                  <Shield className="text-blue-600 h-6 w-6" />
                  How Our Referral Program Works
                </CardTitle>
                <CardDescription>
                  Simple steps to earn rewards through our referral program
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-6">
                  {[
                    {
                      title: "Refer a Friend",
                      description: "Share your unique referral code with friends, family, or business associates who might need our security services."
                    },
                    {
                      title: "They Sign Up",
                      description: "When they sign up for any of our services using your referral code, they get 5% off on their first month's service."
                    },
                    {
                      title: "You Earn Rewards",
                      description: "For every successful referral that converts into a client, you receive a ₹2,000 cash reward or service credit."
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-700 mb-1">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border rounded-lg p-4 bg-blue-50">
                  <p className="text-sm text-blue-800 font-medium mb-2">Your Referral Code</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white rounded border border-blue-200 py-2 px-3 font-mono font-semibold text-blue-800">
                      RUDRA24SECURE
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-1" 
                      onClick={copyReferralCode}
                    >
                      {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {isCopied ? "Copied" : "Copy"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </PageFadeIn>

          <PageFadeIn delay={400}>
            <Card className="shadow-lg border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                  <Award className="text-blue-600 h-6 w-6" />
                  Rewards You Can Earn
                </CardTitle>
                <CardDescription>
                  Exclusive benefits for our loyal customers and referrers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Gift className="h-10 w-10 text-yellow-500" />,
                      title: "Cash Rewards",
                      description: "₹2,000 for every successful referral that becomes a client with a minimum 6-month contract."
                    },
                    {
                      icon: <Shield className="h-10 w-10 text-blue-600" />,
                      title: "Free Security Assessment",
                      description: "After 3 successful referrals, receive a comprehensive security audit for your property valued at ₹15,000."
                    },
                    {
                      icon: <Award className="h-10 w-10 text-yellow-600" />,
                      title: "Platinum Status",
                      description: "After 5 successful referrals, get upgraded to Platinum status with priority response and 24/7 direct support line."
                    }
                  ].map((reward, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                        {reward.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-blue-800 mb-1">{reward.title}</h3>
                        <p className="text-gray-600">{reward.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </PageFadeIn>
        </div>

        <PageFadeIn delay={600}>
          <div className="bg-blue-800 rounded-xl p-8 shadow-xl text-white mb-16 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/images/security-pattern.png')] opacity-5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-30 -mr-32 -mt-32"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Refer Someone Today</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold flex items-center gap-2 text-yellow-300">
                        <span>Your Information</span>
                        <div className="h-px bg-blue-600 flex-grow ml-2 opacity-30"></div>
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-100">Your Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your name" 
                                className="bg-blue-700/50 border-blue-600 text-white placeholder:text-blue-300" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-yellow-200" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-100">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your email" 
                                className="bg-blue-700/50 border-blue-600 text-white placeholder:text-blue-300" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-yellow-200" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-100">Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your phone number" 
                                className="bg-blue-700/50 border-blue-600 text-white placeholder:text-blue-300" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-yellow-200" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold flex items-center gap-2 text-yellow-300">
                        <span>Referral Information</span>
                        <div className="h-px bg-blue-600 flex-grow ml-2 opacity-30"></div>
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="referralName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-100">Referral's Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter referral's name" 
                                className="bg-blue-700/50 border-blue-600 text-white placeholder:text-blue-300" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-yellow-200" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="referralEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-100">Referral's Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter referral's email" 
                                className="bg-blue-700/50 border-blue-600 text-white placeholder:text-blue-300" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-yellow-200" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="referralPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-100">Referral's Phone</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter referral's phone number" 
                                className="bg-blue-700/50 border-blue-600 text-white placeholder:text-blue-300" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-yellow-200" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-100">Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any specific requirements or notes about the referral" 
                            className="bg-blue-700/50 border-blue-600 text-white placeholder:text-blue-300" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-yellow-200" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Referral"}
                    <ChevronsRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </PageFadeIn>

        <PageFadeIn delay={800}>
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "How long does it take to process rewards?",
                  answer: "Rewards are processed within 30 days of the referred client signing a contract with us."
                },
                {
                  question: "Is there a limit to how many people I can refer?",
                  answer: "No, there is no upper limit. You can refer as many people as you want and earn rewards for each successful conversion."
                },
                {
                  question: "Do referrals expire?",
                  answer: "Referrals are valid for 6 months from the date of submission. After that, you would need to refer the person again."
                },
                {
                  question: "Can I refer businesses as well as individuals?",
                  answer: "Absolutely! You can refer both individuals and businesses. In fact, business referrals often come with higher rewards."
                },
                {
                  question: "How will I receive my cash reward?",
                  answer: "You can choose to receive your rewards via bank transfer, check, or as credit toward Rudra 24 Secure services."
                },
                {
                  question: "Can I track the status of my referrals?",
                  answer: "Yes, you can contact our customer service team to get updates on the status of your referrals."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-blue-100 pb-4">
                  <h3 className="font-semibold text-blue-700 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </PageFadeIn>
      </div>
    </div>
  );
}