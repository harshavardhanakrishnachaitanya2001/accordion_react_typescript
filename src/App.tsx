import React, { useState } from 'react';
import Accordion from './Accordion';

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

const App: React.FC = () => {
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>([
    {
      id: 1,
      title: 'Book',
      content: 'A collection papers',
    },
    {
      id: 2,
      title: 'Pen',
      content: 'Used to write on a paper',
    },
    {
      id:3,
      title:'Scale',
      content:'Used to measure or draw string lines',
    },
    {
      id:4,
      title:'Paper',
      content:'That one thin thing on which matter is written or can be written'
    }
  ]);

  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

  const handleAccordionToggle = (id: number) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null);
    } else {
      setOpenAccordionId(id);
    }
  };

  return (
    <div className="container mx-auto py-4">
      {accordionItems.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          isOpen={openAccordionId === item.id}
          onToggle={() => handleAccordionToggle(item.id)}
        >
          <p>{item.content}</p>
        </Accordion>
      ))}
    </div>
  );
};

export default App;
