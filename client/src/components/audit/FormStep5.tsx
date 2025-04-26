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

const propertyTypeMap: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
  retail: "Retail",
  other: "Other",
};

const existingSecurityMap: Record<string, string> = {
  none: "None",
  basic: "Basic (locks, simple alarms)",
  intermediate: "Intermediate (cameras, monitored alarms)",
  advanced: "Advanced (integrated security system)",
};

const securityConcernsMap: Record<string, string> = {
  theft: "Theft/Burglary",
  vandalism: "Vandalism",
  trespassing: "Trespassing",
  violence: "Violence/Assault",
  fire: "Fire Safety",
  cyber: "Cybersecurity",
  access: "Unauthorized Access",
  other: "Other Concerns",
};

const servicesMap: Record<string, string> = {
  guards: "Security Guards",
  surveillance: "Surveillance Systems",
  access: "Access Control Systems",
  alarm: "Alarm Systems",
  housekeeping: "Housekeeping Services",
  maintenance: "Property Maintenance",
  consulting: "Security Consulting",
  training: "Security Training",
};

const neighborhoodSecurityMap: Record<string, string> = {
  "very-safe": "Very Safe",
  safe: "Generally Safe",
  moderate: "Moderate Concerns",
  unsafe: "Some Safety Issues",
  "very-unsafe": "Significant Safety Issues",
};

const budgetMap: Record<string, string> = {
  "under-5000": "Under $5,000",
  "5000-10000": "$5,000 - $10,000",
  "10000-25000": "$10,000 - $25,000",
  "25000-50000": "$25,000 - $50,000",
  "over-50000": "Over $50,000",
};

const timelineMap: Record<string, string> = {
  immediate: "Immediate (ASAP)",
  "1-month": "Within 1 month",
  "3-months": "Within 3 months",
  "6-months": "Within 6 months",
  planning: "Future planning",
};

const formSchema = z.object({
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to proceed",
  }),
  reportDelivery: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface FormStep5Props {
  onSubmit: (data: FormValues) => void;
  onPrev: () => void;
  data: any;
  isSubmitting: boolean;
}

export default function FormStep5({
  onSubmit,
  onPrev,
  data,
  isSubmitting,
}: FormStep5Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consent: false,
      reportDelivery: false,
    },
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
  };

  // Helper function to map array values to their display names
  const mapArrayValues = (
    values: string[] | undefined,
    mapping: Record<string, string>
  ) => {
    if (!values || values.length === 0) return "None selected";
    return values.map((value) => mapping[value] || value).join(", ");
  };

  return (
    <div className="form-step active">
      <h3 className="text-xl font-semibold mb-4">Review Your Information</h3>

      <div className="bg-background-dark p-4 rounded-md mb-6">
        <p className="text-sm text-gray-600 mb-4">
          Please review your information before submitting. You can go back to
          any section to make changes.
        </p>

        <div id="review-content" className="space-y-4">
          <div className="border-b pb-2">
            <h4 className="font-medium">Basic Information</h4>
            <p className="text-sm">{data.fullName}</p>
            <p className="text-sm">{data.organization || "N/A"}</p>
            <p className="text-sm">{data.email}</p>
            <p className="text-sm">{data.phone}</p>
          </div>

          <div className="border-b pb-2">
            <h4 className="font-medium">Property Details</h4>
            <p className="text-sm">
              Type: {propertyTypeMap[data.propertyType] || data.propertyType}
            </p>
            <p className="text-sm">
              Size: {data.propertySize ? `${data.propertySize} sq ft/m²` : "Not specified"}
            </p>
            <p className="text-sm">Address: {data.address}</p>
            <p className="text-sm">
              Occupants: {data.occupants || "Not specified"}
            </p>
            <p className="text-sm">
              Existing Security: {existingSecurityMap[data.existingSecurity] || data.existingSecurity}
            </p>
          </div>

          <div className="border-b pb-2">
            <h4 className="font-medium">Security Concerns</h4>
            <p className="text-sm">
              Concerns: {mapArrayValues(data.concerns, securityConcernsMap)}
            </p>
            <p className="text-sm">
              Past Incidents: {data.securityIncidents || "None reported"}
            </p>
            <p className="text-sm">
              Neighborhood Security: {neighborhoodSecurityMap[data.neighborhoodSecurity] || data.neighborhoodSecurity}
            </p>
          </div>

          <div>
            <h4 className="font-medium">Services Interested In</h4>
            <p className="text-sm">
              Services: {mapArrayValues(data.services, servicesMap)}
            </p>
            <p className="text-sm">
              Budget: {data.budget ? budgetMap[data.budget] || data.budget : "Not specified"}
            </p>
            <p className="text-sm">
              Timeline: {timelineMap[data.timeline] || data.timeline}
            </p>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="mb-6">
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-gray-700">
                      I consent to the collection and processing of my data for
                      the purpose of generating a security report and being
                      contacted by SecureGuard Services.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="mb-6">
            <FormField
              control={form.control}
              name="reportDelivery"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-gray-700">
                      I would like to receive my security report via SMS in
                      addition to email.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={onPrev}>
              Previous
            </Button>
            <Button
              type="submit"
              variant="default"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Submit & Generate Report"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
