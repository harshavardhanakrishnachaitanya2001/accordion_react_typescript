import React from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg">
      <button
        className="w-full py-2 px-4 text-left font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        onClick={onToggle}
      >
        {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
