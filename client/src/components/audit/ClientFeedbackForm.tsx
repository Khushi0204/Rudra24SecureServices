import { useState } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Star } from "lucide-react";

// Schema for the feedback form
const feedbackSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  rating: z.string().min(1, {
    message: "Please select a rating.",
  }),
  serviceQuality: z.string().min(1, {
    message: "Please rate our service quality.",
  }),
  reportQuality: z.string().min(1, {
    message: "Please rate the quality of our security report.",
  }),
  comment: z.string().min(10, {
    message: "Please provide more detailed feedback (minimum 10 characters).",
  }).max(500, {
    message: "Comment is too long. Maximum 500 characters.",
  }),
  reportId: z.string().optional(),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

interface ClientFeedbackFormProps {
  reportId?: string;
}

export default function ClientFeedbackForm({ reportId }: ClientFeedbackFormProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  // Define form with validation
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      rating: "",
      serviceQuality: "",
      reportQuality: "",
      comment: "",
      reportId: reportId || "",
    },
  });

  // Mutation for submitting feedback
  const submitFeedback = useMutation({
    mutationFn: async (data: FeedbackFormValues) => {
      return apiRequest({
        method: "POST",
        path: "/api/submit-feedback",
        body: data,
      });
    },
    onSuccess: () => {
      toast({
        title: "Feedback submitted",
        description: "Thank you for your feedback! We appreciate your input.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error submitting feedback",
        description: "There was an error submitting your feedback. Please try again.",
        variant: "destructive",
      });
      console.error("Feedback submission error:", error);
    },
  });

  const onSubmit = (data: FeedbackFormValues) => {
    setSubmitting(true);
    submitFeedback.mutate(data);
    setSubmitting(false);
  };

  const ratingOptions = [
    { value: "5", label: "Excellent (5/5)" },
    { value: "4", label: "Good (4/5)" },
    { value: "3", label: "Average (3/5)" },
    { value: "2", label: "Poor (2/5)" },
    { value: "1", label: "Very Poor (1/5)" },
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-t-4 border-t-yellow-500">
      <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <CardTitle className="flex items-center">
          <Star className="mr-2 text-yellow-500" />
          {t('feedback.title')}
        </CardTitle>
        <CardDescription className="text-gray-200">
          {t('feedback.subtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('feedback.form.name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('feedback.form.namePlaceholder')} {...field} />
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
                    <FormLabel>{t('feedback.form.email')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('feedback.form.emailPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('feedback.form.overallRating')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('feedback.form.selectRating')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ratingOptions.map((option) => (
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
              
              <FormField
                control={form.control}
                name="serviceQuality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('feedback.form.serviceQuality')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('feedback.form.selectRating')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ratingOptions.map((option) => (
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
              
              <FormField
                control={form.control}
                name="reportQuality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('feedback.form.reportQuality')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('feedback.form.selectRating')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ratingOptions.map((option) => (
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
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('feedback.form.additionalComments')}</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t('feedback.form.commentsPlaceholder')} 
                      {...field} 
                      className="h-32 resize-none"
                    />
                  </FormControl>
                  <FormDescription>
                    {t('feedback.form.commentsHelp')}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {reportId && (
              <FormField
                control={form.control}
                name="reportId"
                render={({ field }) => (
                  <FormItem className="hidden">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-blue-800 hover:bg-blue-700 text-white"
              disabled={submitting}
            >
              {submitting ? t('feedback.form.submitting') : t('feedback.form.submit')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}