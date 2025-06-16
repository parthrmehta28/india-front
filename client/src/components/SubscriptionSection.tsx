import { useState } from "react";
import { AnimateOnScroll } from "@/pages/Home";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import FormSuccess from "@/components/ui/form-success";
import { SUBSCRIPTION_PLANS } from "@/lib/constants";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  plan: z.string().min(1, "Please select a plan"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive updates",
  }),
});

type SubscriptionFormValues = z.infer<typeof formSchema>;

export default function SubscriptionSection() {
  const { toast } = useToast();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const mutation = useMutation({
    mutationFn: async (data: SubscriptionFormValues) => {
      const payload = {
        name: data.name,
        email: data.email,
        plan: data.plan,
      };
      
      const response = await apiRequest("POST", "/api/subscribe", payload);
      return response.json();
    },
    onSuccess: () => {
      setShowSuccessMessage(true);
      toast({
        title: "Subscription Registered",
        description: "We've received your information and will contact you when subscriptions open.",
      });
    },
    onError: (error) => {
      toast({
        title: "Subscription Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      plan: "",
      consent: false,
    },
  });

  const onSubmit = (data: SubscriptionFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="subscribe" className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-helvetica font-bold mb-4">
            Subscribe to <span className="text-white">India Front</span>
          </h2>
          <p className="text-xl font-inter mb-12">
            Be among the first to receive our content and join the movement
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {SUBSCRIPTION_PLANS.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`${plan.bgClass} rounded-lg p-6 backdrop-blur-sm border ${plan.borderClass} transition-colors ${
                  plan.popular ? "transform scale-105 relative shadow-xl" : "hover:bg-white/15"
                }`}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-max bg-indian-green text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-helvetica font-bold mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold mb-4">₹{plan.price}<span className="text-base font-normal">/year</span></p>
                <ul className="text-left space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="text-saffron h-4 w-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  type="button"
                  className="w-full cta-button text-white transition-all hover:translate-y-[-2px] hover:shadow-lg"
                  onClick={() => {
                    form.setValue("plan", plan.id);
                    document.getElementById("subscription-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Subscribe
                </Button>
              </motion.div>
            ))}
          </div>
          
          <div 
            id="subscription-form" 
            className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20 max-w-md mx-auto"
          >
            <h3 className="text-xl font-helvetica font-bold mb-6">Interested in subscribing?</h3>
            
            <AnimatePresence mode="wait">
              {showSuccessMessage ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8"
                >
                  <FormSuccess 
                    message="We've received your information and will contact you when subscriptions open."
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="text-left">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your Name"
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:ring-saffron"
                                {...field}
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
                          <FormItem className="text-left">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your@email.com"
                                type="email"
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:ring-saffron"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="plan"
                        render={({ field }) => (
                          <FormItem className="text-left">
                            <FormLabel>Preferred Plan</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white focus:ring-saffron">
                                  <SelectValue placeholder="Select a plan" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="digital">Digital (₹499/year)</SelectItem>
                                <SelectItem value="print-digital">Print + Digital (₹999/year)</SelectItem>
                                <SelectItem value="premium">Premium (₹2499/year)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-left">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="mt-1 data-[state=checked]:bg-saffron"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal">
                                I agree to receive updates about India First Magazine and understand I can unsubscribe at any time.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button
                        type="submit"
                        className="w-full cta-button text-white py-[17.6px] text-[19.8px] transition-all hover:translate-y-[-2px] hover:shadow-lg font-semibold"
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? "Submitting..." : "Register Interest"}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
