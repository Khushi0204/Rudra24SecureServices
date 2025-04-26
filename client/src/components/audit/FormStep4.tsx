import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const serviceOptions = [
  { id: "guards", label: "Security Guards" },
  { id: "surveillance", label: "Surveillance Systems" },
  { id: "access", label: "Access Control Systems" },
  { id: "alarm", label: "Alarm Systems" },
  { id: "housekeeping", label: "Housekeeping Services" },
  { id: "maintenance", label: "Property Maintenance" },
  { id: "consulting", label: "Security Consulting" },
  { id: "training", label: "Security Training" },
];

const formSchema = z.object({
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.string().optional(),
  timeline: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

interface FormStep4Props {
  onNext: (data: FormValues) => void;
  onPrev: () => void;
  data: any;
}

export default function FormStep4({
  onNext,
  onPrev,
  data,
}: FormStep4Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: data.services || [],
      budget: data.budget || "",
      timeline: data.timeline || "3-months",
    },
  });

  const onSubmit = (values: FormValues) => {
    onNext(values);
  };

  return (
    <div className="form-step active">
      <h3 className="text-xl font-semibold mb-4">Services You're Interested In</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">
              Select all services you're interested in:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="services"
                render={() => (
                  <FormItem>
                    {serviceOptions.map((service) => (
                      <div key={service.id} className="flex items-start space-x-3 py-2">
                        <FormField
                          control={form.control}
                          name="services"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(service.id)}
                                    onCheckedChange={(checked) => {
                                      const currentValue = field.value || [];
                                      return checked
                                        ? field.onChange([...currentValue, service.id])
                                        : field.onChange(
                                            currentValue.filter(
                                              (value) => value !== service.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal text-sm text-gray-700">
                                  {service.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      </div>
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="mb-6">
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget Range</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="under-5000">Under $5,000</SelectItem>
                      <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                      <SelectItem value="over-50000">Over $50,000</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mb-6">
            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Implementation Timeline</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (ASAP)</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="planning">Future planning</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={onPrev}
            >
              Previous
            </Button>
            <Button type="submit" variant="secondary">
              Review & Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
