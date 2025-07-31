import { sanityFetch } from '@/sanity/lib/live';
import { FAQS_QUERY } from '@/sanity/lib/queries';
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from './ui/accordion';

const FAQAccordion = async () => {
  const { data: faqs } = await sanityFetch({ query: FAQS_QUERY });
  const { list } = faqs[0];

  if (!faqs) return null;

  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="max-w-[70%] mx-auto md:max-w-[50%] font-jost"
      >
        {list?.map((li, i) => (
          <AccordionItem key={i} value={li.question as string}>
            <AccordionTrigger>{li.question}</AccordionTrigger>
            <AccordionContent>{li.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
