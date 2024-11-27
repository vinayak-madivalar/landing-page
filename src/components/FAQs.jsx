import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqItems = [
    {
      id: 1,
      question: "How do I get a Referral Code?",
      answer:
        "Log in to your account, go to the Referral Program section, and click 'Generate Referral Code' to get your code.",
    },
    {
      id: 2,
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      id: 3,
      question: "How do I get a Referral Code?",
      answer:
        "Log in to your account, go to the Referral Program section, and click 'Generate Referral Code' to get your code.",
    },
  ];

  return (
    <div className="px-20 py-20">
      <div className="absolute right-[-10%] h-40 w-40 blur-[100px] rounded-full bg-gradient-to-r from-[#E4B40D] to-[#EDD955]"></div>
      <div className="px-16 py-8 max-w-[75%] relative left-1/2 -translate-x-1/2 bg-card">
        <h1 className="font-firaCode text-4xl font-extrabold mb-6 text-[#f9d423] text-center">
          FAQs
        </h1>
        <div className="">
          <Accordion type="single" collapsible>
            {faqItems.map((item) => (
              <AccordionItem value={`item-${item.id}`} key={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="z-0 absolute left-[-8%] h-32 w-32 blur-[100px] rounded-full bg-gradient-to-r from-[#E4B40D] to-[#EDD955]"></div>
    </div>
  );
};

export default FAQs;
