// Subscription plans
export const SUBSCRIPTION_PLANS = [
  {
    id: "digital",
    title: "Digital",
    price: "499",
    features: [
      "Full digital access",
      "Interactive content",
      "Exclusive online articles",
      "Mobile app access"
    ],
    bgClass: "bg-white/10",
    borderClass: "border-white/20",
    popular: false
  },
  {
    id: "print-digital",
    title: "Print + Digital",
    price: "999",
    features: [
      "Print magazine delivery",
      "Full digital access",
      "Special print supplements",
      "Access to archives",
      "Exclusive events access"
    ],
    bgClass: "bg-saffron/20",
    borderClass: "border-saffron/30",
    popular: true
  },
  {
    id: "premium",
    title: "Premium",
    price: "2499",
    features: [
      "All Print + Digital benefits",
      "Quarterly special editions",
      "VIP event invitations",
      "Exclusive roundtables",
      "Early access to content"
    ],
    bgClass: "bg-white/10",
    borderClass: "border-white/20",
    popular: false
  }
];

// Featured articles
export const FEATURED_ARTICLES = [
  {
    title: "The Rise of India's Tech Unicorns",
    description: "How India became the world's third-largest startup ecosystem and what it means for global innovation.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    category: "Economy",
    categoryColor: "bg-saffron/10 text-saffron",
    author: "Arjun Sharma"
  },
  {
    title: "Tradition Meets Modernity",
    description: "Exploring the dynamic tension between India's ancient traditions and rapid modernization.",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    category: "Society",
    categoryColor: "bg-green/10 text-indian-green",
    author: "Priya Nair"
  },
  {
    title: "Building the New India",
    description: "How massive infrastructure projects are transforming India's landscape and economy.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Infrastructure",
    categoryColor: "bg-navy/10 text-navy",
    author: "Rajiv Mehta"
  }
];

// Expert endorsements
export const TESTIMONIALS = [
  {
    quote: "India First is poised to become the defining voice in Indian journalism, offering nuanced perspectives that are desperately needed in today's media landscape.",
    name: "Dr. Vikram Patel",
    title: "Professor, Harvard University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    quote: "A refreshing addition to India's media landscape. The preview content showcases deep analysis and balanced reporting that goes beyond headlines.",
    name: "Meena Sharma",
    title: "CEO, Future Media Group",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  },
  {
    quote: "India First promises to deliver the kind of thoughtful analysis and diverse perspectives that are essential for understanding modern India's complexities.",
    name: "Rajiv Malhotra",
    title: "Author & Cultural Analyst",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

// Contact form subjects
export const CONTACT_SUBJECTS = [
  { value: "subscription", label: "Subscription Inquiry" },
  { value: "advertising", label: "Advertising & Partnerships" },
  { value: "content", label: "Content Submission" },
  { value: "careers", label: "Careers & Opportunities" },
  { value: "other", label: "Other" }
];
