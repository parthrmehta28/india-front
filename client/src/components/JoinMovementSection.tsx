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
        plan: "movement", // Using the existing API but with a specific tag
      };
      
      const response = await apiRequest("POST", "/api/subscribe", payload);
      return response.json();
    },
    onSuccess: () => {
      setShowSuccessMessage(true);
      toast({
        title: "Application Received",
        description: "Thank you for joining the movement. A team member will contact you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
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
    <section id="join" className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-helvetica font-bold text-center mb-4">
            Join the <span className="text-white">India Front</span> Movement Today
          </h2>
          <p className="text-xl font-nunito text-center max-w-2xl mx-auto mb-8">
            We are building a collective of leaders who are committed to shaping India's future — together.
          </p>
          <p className="text-lg font-nunito text-center mb-12">
            Fill out the form and a member of our team will get in touch with you personally.
          </p>
          
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20">
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
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white focus:ring-saffron"
                                {...field}
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
                            <FormLabel>Contact No</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+91 9876543210"
                                type="tel"
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:ring-blue"
                                {...field}
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
                            <FormLabel>LinkedIn Profile</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://www.linkedin.com/in/yourprofile"
                                type="url"
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white focus:ring-saffron"
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
                            <FormLabel>Email ID</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your@email.com"
                                type="email"
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white focus:ring-saffron"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative group"
                      >
                        <Button
                          type="submit"
                          className="w-full bg-blue hover:bg-white hover:text-dark-blue text-white py-3 transition-all duration-300 hover:shadow-xl mt-4 font-semibold relative overflow-hidden"
                          disabled={mutation.isPending}
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            {mutation.isPending ? (
                              <>
                                <motion.div
                                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                                Submitting...
                              </>
                            ) : (
                              <>
                                Join the Movement
                                <motion.div
                                  className="w-0 h-0.5 bg-white rounded"
                                  initial={{ width: 0 }}
                                  whileHover={{ width: "1.5rem" }}
                                  transition={{ duration: 0.3 }}
                                />
                              </>
                            )}
                          </span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          />
                        </Button>
                      </motion.div>
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