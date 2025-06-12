import { AnimateOnScroll } from "@/pages/Home";

export default function WhySection() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-helvetica font-bold text-center mb-4">
            <span className="text-blue">Why</span> <span className="text-gray">India Front?</span>
          </h2>
          <div className="w-20 h-1 bg-blue mx-auto mb-12"></div>
          
          <div className="bg-light-gray rounded-lg p-8 shadow-md">
            <p className="text-lg font-inter mb-6 leading-relaxed">
              India doesn't need more debates. It needs inclusive, action-driven roadmaps.
              It needs leaders who can drive goal roadmapping across every sphere — business, governance, technology, sustainability, and national security.
            </p>
            
            <p className="text-lg font-inter font-semibold mb-4">India Front exists to:</p>
            <ul className="list-disc pl-8 space-y-3 mb-6 text-lg font-inter">
              <li>Move beyond pointing at problems to problem-solving with purpose</li>
              <li>Empower startups and industry with practical, scalable insights</li>
              <li>Drive awareness around Artificial Intelligence and other emerging technologies</li>
              <li>Foster inclusive ecosystems across education, supply chains, and infrastructure</li>
              <li>Inspire a mindset of empowerment, ownership, and nation-building</li>
              <li>Promote transparent, ethical governance</li>
              <li>Build a sustainability-first approach into everything we create</li>
            </ul>
            
            <p className="text-lg font-nunito font-semibold">
              This is not just a conversation. It's a movement for growth — one built on <a href="#join" className="text-blue font-bold hover:underline">thought-leadership</a> to devise measurable action plans to propel our country's economy further.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}