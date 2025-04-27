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
  premisesType: z.string().min(1, "Please select a property type"),
  landArea: z.string().optional(),
  buildingArea: z.string().optional(),
  floors: z.string().optional(),
  entrances: z.string().optional(),
  operatingHours: z.string().min(1, "Please select operating hours"),
  securityProvider: z.string().optional(),
  securityContact: z.string().optional(),
  occupants: z.string().optional(),
  address: z.string().min(5, "Please enter a valid address"),
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
      premisesType: data.premisesType || "",
      landArea: data.landArea || "",
      buildingArea: data.buildingArea || "",
      floors: data.floors || "",
      entrances: data.entrances || "",
      operatingHours: data.operatingHours || "",
      securityProvider: data.securityProvider || "",
      securityContact: data.securityContact || "",
      occupants: data.occupants || "",
      address: data.address || "",
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
              name="premisesType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Type of Premises <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select premises type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="residence">Private Residence</SelectItem>
                      <SelectItem value="apartment">Apartment Complex</SelectItem>
                      <SelectItem value="office">Office Building</SelectItem>
                      <SelectItem value="retail">Retail Store</SelectItem>
                      <SelectItem value="warehouse">Warehouse/Storage</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing Facility</SelectItem>
                      <SelectItem value="educational">Educational Institution</SelectItem>
                      <SelectItem value="healthcare">Healthcare Facility</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
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
                    Premises Address <span className="text-red-500">*</span>
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
              name="landArea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Land Area (sq ft/m²)</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="buildingArea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Building Area (sq ft/m²)</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="floors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Floors/Levels</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="entrances"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Entrances/Exits</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="operatingHours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Operating Hours <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select operating hours" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="standard">Standard Business Hours (9am-5pm)</SelectItem>
                      <SelectItem value="extended">Extended Hours (6am-10pm)</SelectItem>
                      <SelectItem value="24hours">24 Hours</SelectItem>
                      <SelectItem value="irregular">Irregular/Variable Hours</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="occupants"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Average Daily Occupancy</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="securityProvider"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Security Provider (if any)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="securityContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Security Manager/Contact Person</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
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
