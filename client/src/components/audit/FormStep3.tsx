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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const securityConcerns = [
  { id: "theft", label: "Theft/Burglary" },
  { id: "vandalism", label: "Vandalism" },
  { id: "trespassing", label: "Trespassing" },
  { id: "violence", label: "Violence/Assault" },
  { id: "fire", label: "Fire Safety" },
  { id: "cyber", label: "Cybersecurity" },
  { id: "access", label: "Unauthorized Access" },
  { id: "other", label: "Other Concerns" },
];

const formSchema = z.object({
  concerns: z.array(z.string()).optional(),
  securityIncidents: z.string().optional(),
  neighborhoodSecurity: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

interface FormStep3Props {
  onNext: (data: FormValues) => void;
  onPrev: () => void;
  data: any;
}

export default function FormStep3({
  onNext,
  onPrev,
  data,
}: FormStep3Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      concerns: data.concerns || [],
      securityIncidents: data.securityIncidents || "",
      neighborhoodSecurity: data.neighborhoodSecurity || "safe",
    },
  });

  const onSubmit = (values: FormValues) => {
    onNext(values);
  };

  return (
    <div className="form-step active">
      <h3 className="text-xl font-semibold mb-4">Security Concerns</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">
              Select all security concerns that apply to your property:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="concerns"
                render={() => (
                  <FormItem>
                    {securityConcerns.map((concern) => (
                      <div key={concern.id} className="flex items-start space-x-3 py-2">
                        <FormField
                          control={form.control}
                          name="concerns"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(concern.id)}
                                    onCheckedChange={(checked) => {
                                      const currentValue = field.value || [];
                                      return checked
                                        ? field.onChange([...currentValue, concern.id])
                                        : field.onChange(
                                            currentValue.filter(
                                              (value) => value !== concern.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal text-sm text-gray-700">
                                  {concern.label}
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
              name="securityIncidents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Past Security Incidents (if any)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please describe any security incidents that have occurred at your property..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mb-6">
            <FormField
              control={form.control}
              name="neighborhoodSecurity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Neighborhood Security Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select security level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="very-safe">Very Safe</SelectItem>
                      <SelectItem value="safe">Generally Safe</SelectItem>
                      <SelectItem value="moderate">Moderate Concerns</SelectItem>
                      <SelectItem value="unsafe">Some Safety Issues</SelectItem>
                      <SelectItem value="very-unsafe">
                        Significant Safety Issues
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
              Next: Service Interests
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
