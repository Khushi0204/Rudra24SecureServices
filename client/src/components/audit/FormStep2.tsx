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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  propertyType: z.string().min(1, "Please select a property type"),
  propertySize: z.string().optional(),
  address: z.string().min(5, "Please enter a valid address"),
  occupants: z.string().optional(),
  existingSecurity: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface FormStep2Props {
  onNext: (data: FormValues) => void;
  onPrev: () => void;
  data: any;
}

export default function FormStep2({
  onNext,
  onPrev,
  data,
}: FormStep2Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyType: data.propertyType || "",
      propertySize: data.propertySize || "",
      address: data.address || "",
      occupants: data.occupants || "",
      existingSecurity: data.existingSecurity || "none",
    },
  });

  const onSubmit = (values: FormValues) => {
    onNext(values);
  };

  return (
    <div className="form-step active">
      <h3 className="text-xl font-semibold mb-4">Property Details</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Property Type <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="propertySize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Size (sq ft/m²)</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>
                    Property Address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="occupants"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Regular Occupants</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="existingSecurity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Existing Security Systems</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select existing security" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="basic">
                        Basic (locks, simple alarms)
                      </SelectItem>
                      <SelectItem value="intermediate">
                        Intermediate (cameras, monitored alarms)
                      </SelectItem>
                      <SelectItem value="advanced">
                        Advanced (integrated security system)
                      </SelectItem>
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
              Next: Security Concerns
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
