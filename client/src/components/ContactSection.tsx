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
  MapPin, 
  Phone, 
  Mail, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin 
} from "lucide-react";
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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormSuccess from "@/components/ui/form-success";
import { CONTACT_SUBJECTS } from "@/lib/constants";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Message Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-saffron" />,
      title: "Address",
      content: "22nd Floor, Nariman Point\nMumbai, Maharashtra 400021\nIndia",
    },
    {
      icon: <Phone className="text-indian-green" />,
      title: "Phone",
      content: "+91 22 4023 7890",
    },
    {
      icon: <Mail className="text-navy" />,
      title: "Email",
      content: "info@indiafirstmagazine.com",
    },
  ];

  const socialLinks = [
    { icon: <Twitter />, color: "bg-saffron/10 hover:bg-saffron/20 text-saffron" },
    { icon: <Facebook />, color: "bg-navy/10 hover:bg-navy/20 text-navy" },
    { icon: <Instagram />, color: "bg-indian-green/10 hover:bg-indian-green/20 text-indian-green" },
    { icon: <Linkedin />, color: "bg-saffron/10 hover:bg-saffron/20 text-saffron" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-helvetica font-bold mb-4">
            <span className="text-blue">Contact</span> <span className="text-gray">Us</span>
          </h2>
          <p className="text-xl font-nunito max-w-2xl mx-auto">
            Have questions about the movement or opportunities? Get in touch with our team.
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-light-gray rounded-lg p-8">
              <h3 className="text-2xl font-helvetica font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-light-blue flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue" />
                  </div>
                  <div>
                    <h4 className="font-helvetica font-bold">Email</h4>
                    <p className="font-nunito">team@indiafront.co.in</p>
                  </div>
                </div>
              </div>
              

            </div>
          </div>
          
          <div>
            <div className="bg-light-gray rounded-lg p-8">
              <h3 className="text-2xl font-helvetica font-bold mb-6">Send a Message</h3>
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <FormSuccess 
                      message="Thank you for your message! We'll get back to you as soon as possible."
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
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your name" 
                                  className="focus:ring-saffron" 
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
                            <FormItem>
                              <FormLabel>Your Email</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="your@email.com" 
                                  className="focus:ring-saffron" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="focus:ring-saffron">
                                    <SelectValue placeholder="Select a subject" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {CONTACT_SUBJECTS.map((subject) => (
                                    <SelectItem key={subject.value} value={subject.value}>
                                      {subject.label}
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
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Your message" 
                                  className="min-h-32 focus:ring-saffron" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button
                          type="submit"
                          className="w-full cta-button text-white py-[17.6px] text-[19.8px] transition-all hover:translate-y-[-2px] hover:shadow-lg font-semibold"
                          disabled={mutation.isPending}
                        >
                          {mutation.isPending ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
