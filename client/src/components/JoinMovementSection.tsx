import { useState } from "react";
import { AnimateOnScroll } from "@/pages/Home";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormSuccess from "@/components/ui/form-success";

const formSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  contact: z.string().min(10, "Contact number is required"),
  linkedin: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
});

type JoinFormValues = z.infer<typeof formSchema>;

export default function JoinMovementSection() {
  const { toast } = useToast();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const mutation = useMutation({
    mutationFn: async (data: JoinFormValues) => {
      const payload = {
        name: data.name,
        email: data.email,
        plan: "community", // Using the existing API but with a specific tag
      };
      
      const response = await apiRequest("POST", "/api/subscribe", payload);
      return response.json();
    },
    onSuccess: () => {
      setShowSuccessMessage(true);
      toast({
        title: "Application Received",
        description: "Thank you for joining the community. A team member will contact you soon.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const form = useForm<JoinFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      linkedin: "",
    },
  });

  const onSubmit = (data: JoinFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="join" className="py-24 bg-gradient-to-br from-blue-900 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <AnimateOnScroll className="text-left lg:pr-8">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-helvetica font-bold mb-6 text-white leading-tight tracking-normal">
                Join the <span className="text-white">#IndiaFrontCommunity</span> Early
              </h2>
              <p className="text-xl md:text-2xl font-helvetica mb-6 text-white leading-relaxed">
                Be part of the founding community that will shape India's most influential thought leadership platform.
              </p>
              <p className="text-lg font-inter text-white leading-relaxed">
                Register your interest now. Our team will reach out personally with exclusive early access and collaboration opportunities.
              </p>
            </AnimateOnScroll>

            {/* Right Column - Form */}
            <AnimateOnScroll className="w-full">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
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
                        message="Thank you for joining India First. Our team will be in touch with you shortly to discuss next steps and opportunities."
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
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your full name"
                                    {...field}
                                    className="text-black"
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
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    {...field}
                                    className="text-black"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="contact"
                            render={({ field }) => (
                              <FormItem className="text-left">
                                <FormLabel>Contact Number</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+91 XXXXX XXXXX"
                                    {...field}
                                    className="text-black"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="linkedin"
                            render={({ field }) => (
                              <FormItem className="text-left">
                                <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                                <FormControl>
                                  <Input
                                    type="url"
                                    placeholder="https://linkedin.com/in/yourprofile"
                                    {...field}
                                    className="text-black"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <Button
                            type="submit"
                            className="w-full cta-button text-white px-[35.2px] py-[17.6px] text-[19.8px] rounded-md font-semibold transition-all hover:translate-y-[-2px] hover:shadow-lg mt-4"
                            disabled={mutation.isPending}
                          >
                            {mutation.isPending ? "Submitting..." : "Join the Community"}
                          </Button>
                        </form>
                      </Form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}