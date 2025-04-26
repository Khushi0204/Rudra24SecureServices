import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '../lib/queryClient';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useTranslation } from 'react-i18next';

// Define the form schema using zod
const careerFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number."
  }),
  position: z.string().min(1, {
    message: "Please select a position."
  }),
  experience: z.string().optional(),
  coverLetter: z.string().optional(),
  resume: z.instanceof(FileList).refine(files => {
    if (!files || files.length === 0) return true;
    const file = files[0];
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    return validTypes.includes(file.type);
  }, {
    message: "Please upload a PDF, DOC, DOCX, or TXT file."
  })
});

// Define the type based on the schema
type CareerFormValues = z.infer<typeof careerFormSchema>;

// Available positions
const positions = [
  { id: "security-guard", title: "Security Guard" },
  { id: "supervisor", title: "Security Supervisor" },
  { id: "house-keeping", title: "House Keeping Staff" },
  { id: "manager", title: "House Keeping Manager" },
  { id: "driver", title: "Driver" },
  { id: "admin", title: "Administrative Staff" },
];

// Experience years
const experienceOptions = [
  { value: "0", label: "Less than 1 year" },
  { value: "1", label: "1 year" },
  { value: "2", label: "2 years" },
  { value: "3", label: "3 years" },
  { value: "5", label: "5+ years" },
  { value: "10", label: "10+ years" },
];

export default function Careers() {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const form = useForm<CareerFormValues>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      coverLetter: "",
    },
  });

  const submitApplication = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest({
        url: "/api/careers/apply",
        method: "POST",
        body: data,
        headers: {
          // No need to set Content-Type as it will be set automatically for FormData
        },
      });
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We will contact you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit your application. Please try again.",
        variant: "destructive",
      });
      console.error("Error submitting application:", error);
    },
  });

  const onSubmit = (values: CareerFormValues) => {
    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append('fullName', values.fullName);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('position', values.position);
    
    if (values.experience) {
      formData.append('experience', values.experience);
    }
    
    if (values.coverLetter) {
      formData.append('coverLetter', values.coverLetter);
    }
    
    // Add resume file if provided
    if (values.resume && values.resume.length > 0) {
      formData.append('resume', values.resume[0]);
    }
    
    submitApplication.mutate(formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-blue-800 mb-4">{t('careers.joinOurTeam')}</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {t('careers.joinDescription')}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-6">{t('careers.whyJoinUs')}</h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">{t('careers.benefits.training.title')}</h3>
                  <p className="text-gray-700">{t('careers.benefits.training.description')}</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">{t('careers.benefits.growth.title')}</h3>
                  <p className="text-gray-700">{t('careers.benefits.growth.description')}</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">{t('careers.benefits.compensation.title')}</h3>
                  <p className="text-gray-700">{t('careers.benefits.compensation.description')}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-6">{t('careers.applicationForm')}</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('careers.form.fullName')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('careers.form.fullNamePlaceholder')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('careers.form.email')}</FormLabel>
                            <FormControl>
                              <Input placeholder={t('careers.form.emailPlaceholder')} {...field} />
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
                            <FormLabel>{t('careers.form.phone')}</FormLabel>
                            <FormControl>
                              <Input placeholder={t('careers.form.phonePlaceholder')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('careers.form.position')}</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={t('careers.form.positionPlaceholder')} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {positions.map(position => (
                                  <SelectItem key={position.id} value={position.title}>
                                    {position.title}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('careers.form.experience')}</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={t('careers.form.experiencePlaceholder')} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {experienceOptions.map(option => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="coverLetter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('careers.form.coverLetter')}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t('careers.form.coverLetterPlaceholder')}
                              className="resize-none h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            {t('careers.form.coverLetterDescription')}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="resume"
                      render={({ field: { value, onChange, ...fieldProps } }) => (
                        <FormItem>
                          <FormLabel>{t('careers.form.resume')}</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              accept=".pdf,.doc,.docx,.txt,.rtf"
                              onChange={(e) => {
                                onChange(e.target.files);
                              }}
                              {...fieldProps}
                            />
                          </FormControl>
                          <FormDescription>
                            {t('careers.form.resumeDescription')}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-700 hover:bg-blue-800"
                      disabled={submitApplication.isPending}
                    >
                      {submitApplication.isPending ? t('careers.form.submitting') : t('careers.form.submit')}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">{t('careers.openPositions')}</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {positions.map(position => (
                <div key={position.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">{position.title}</h3>
                  <p className="text-gray-700 mb-4">{t(`careers.positions.${position.id}.description`)}</p>
                  <p className="text-blue-600 font-medium">{t(`careers.positions.${position.id}.requirements`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}