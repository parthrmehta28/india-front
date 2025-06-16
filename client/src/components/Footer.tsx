import { useState } from "react";
import { Logo } from "./Logo";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function Footer() {
  const { toast } = useToast();
  const [subscribed, setSubscribed] = useState(false);
  
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ];
  
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });
  
  const mutation = useMutation({
    mutationFn: async (data: NewsletterFormValues) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: () => {
      setSubscribed(true);
      form.reset();
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
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
  
  const onSubmit = (data: NewsletterFormValues) => {
    mutation.mutate(data);
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo className="filter brightness-0 invert" />
            </div>
            <p className="text-lg font-inter leading-relaxed mb-8 max-w-2xl text-white/90">
              A groundbreaking platform launching to accelerate India's progress through ideas, action, and impact. Uniting problem solvers, change-makers, and thought leaders to shape India's future.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-helvetica font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="font-inter text-lg text-white/80 hover:text-white transition-colors duration-300 block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Launch Notification & Community Section */}
        <div className="border-t border-white/20 pt-12 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Launch Notification Signup */}
            <div>
              <h3 className="text-xl font-helvetica font-bold mb-4 text-white">Be the First to Know</h3>
              <p className="text-white/90 font-inter mb-6">
                Get exclusive early access and launch updates for India's most influential thought leadership platform.
              </p>
              
              {subscribed ? (
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="text-white font-inter">Thank you! We'll keep you updated on our launch.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="your.email@example.com"
                              {...field}
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                              disabled={mutation.isPending}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      disabled={mutation.isPending}
                      className="bg-white text-blue hover:bg-white/90 font-semibold px-6"
                    >
                      {mutation.isPending ? "Joining..." : "Notify Me"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>

            {/* Community Building */}
            <div>
              <h3 className="text-xl font-helvetica font-bold mb-4 text-white">Join Early Community</h3>
              <div className="space-y-3">
                <a 
                  href="#join" 
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors font-inter"
                >
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-xs font-bold">WA</span>
                  </div>
                  <span>WhatsApp Groups (Sector-wise)</span>
                </a>
                <a 
                  href="#join" 
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors font-inter"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                    <span className="text-xs font-bold">Li</span>
                  </div>
                  <span>LinkedIn Professional Community</span>
                </a>
                <a 
                  href="#join" 
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors font-inter"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-xs font-bold">EC</span>
                  </div>
                  <span>Early Contributor Program</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-helvetica font-bold mb-4 text-white">Stay Updated</h4>
            {!subscribed ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="cta-button px-6 font-semibold"
                  >
                    {mutation.isPending ? "..." : "Subscribe"}
                  </Button>
                </form>
              </Form>
            ) : (
              <p className="text-white/90 font-inter">Thank you for subscribing!</p>
            )}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="font-inter text-white/70 mb-4">
            &copy; {new Date().getFullYear()} India Front. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="font-inter text-sm text-white/60 hover:text-white/90 transition-colors">Privacy Policy</a>
            <a href="#" className="font-inter text-sm text-white/60 hover:text-white/90 transition-colors">Terms of Service</a>
            <a href="#" className="font-inter text-sm text-white/60 hover:text-white/90 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}