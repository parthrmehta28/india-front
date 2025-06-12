import { useState } from "react";
import { SmallLogo } from "./Logo";
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
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

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
    { href: "#magazine", label: "Magazine" },
    { href: "#subscribe", label: "Subscribe" },
    { href: "#contact", label: "Contact" },
  ];
  
  const socialLinks = [
    { icon: <Twitter size={16} />, href: "#" },
    { icon: <Facebook size={16} />, href: "#" },
    { icon: <Instagram size={16} />, href: "#" },
    { icon: <Linkedin size={16} />, href: "#" },
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
        description: "You've been subscribed to our newsletter.",
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
  
  const onSubmit = (data: NewsletterFormValues) => {
    mutation.mutate(data);
  };

  return (
    <footer className="bg-dark-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <SmallLogo className="mb-4" />
            <p className="mb-6 font-inter">
              A platform to accelerate India's progress through ideas, action, and impact. Uniting problem solvers, change-makers, and thought-leaders to shape India's future.
            </p>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-helvetica font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="font-inter hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-helvetica font-bold mb-4">Stay Connected</h3>
            <p className="mb-4 font-inter">Join our community and receive updates about the movement.</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your email address"
                          type="email"
                          className="px-4 py-2 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/70 focus:ring-saffron"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="bg-blue hover:bg-white hover:text-dark-blue text-white py-2 transition-all hover:translate-y-[-2px] hover:shadow-lg font-semibold"
                  disabled={mutation.isPending || subscribed}
                >
                  {subscribed ? "Subscribed!" : mutation.isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p className="font-inter">&copy; {new Date().getFullYear()} India Front. All rights reserved.</p>
          <div className="flex justify-center mt-2 space-x-4">
            <a href="#" className="font-inter hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="font-inter hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="font-inter hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
