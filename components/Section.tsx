import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 pb-2 mb-6 border-b-2 border-sky-200">
        {title}
      </h2>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
        {children}
      </div>
    </section>
  );
};

export default Section;