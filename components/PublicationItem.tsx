import React from 'react';
import type { Publication, PublicationType } from '../types';
import Icon from './Icon';

interface PublicationItemProps {
  publication: Publication;
  highlightNames: string[];
  language: 'en' | 'zh';
  type: PublicationType;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ publication, highlightNames, language, type }) => {
  const { title, authors, venue, year, links, metrics, title_en, venue_en, authors_en } = publication;

  const typeMap: { [key in PublicationType]: string } = {
    journal: '[J]',
    patent: '[P]',
    software: '',
    monograph: '[A]',
  };
  const identifier = typeMap[type];

  const hasTranslation = language === 'en' && (title_en || (authors_en && authors_en.length > 0));
  const displayTitle = hasTranslation && title_en ? title_en : title;
  const displayVenue = hasTranslation && venue_en ? (venue_en || venue) : venue;
  const displayAuthors = hasTranslation && authors_en ? authors_en : authors;

  return (
    <article className="text-lg leading-relaxed">
      <h3 className="font-semibold text-slate-900 flex items-baseline flex-wrap">
        <span>
          {displayTitle}
          {identifier && <span className="text-slate-500 font-normal ml-2">{identifier}</span>}
        </span>
        {hasTranslation && (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 ml-2 font-normal">
                <Icon type="translate" className="w-3.5 h-3.5" />
                <span>Translation</span>
            </span>
        )}
      </h3>
      <p className="text-md text-slate-600 mt-1">
        {displayAuthors.map((author, index) => (
          <span key={index}>
            {highlightNames.includes(author.trim()) ? (
              <strong className="font-bold text-sky-700">{author}</strong>
            ) : (
              author
            )}
            {index < displayAuthors.length - 1 && ', '}
          </span>
        ))}
      </p>
      <p className="text-md text-slate-500 italic mt-1">
        {displayVenue}, {year}.
      </p>
      {metrics && metrics[language] && (
        <p className="text-md text-sky-600 font-medium mt-1">
          {metrics[language]}
        </p>
      )}
      {links && (
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium">
          {links.pdf && <a href={links.pdf} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 hover:underline transition-colors">[PDF]</a>}
          {links.doi && <a href={links.doi} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 hover:underline transition-colors">[DOI]</a>}
          {links.code && <a href={links.code} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 hover:underline transition-colors">[Code]</a>}
          {links.presentation && <a href={links.presentation} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 hover:underline transition-colors">[Presentation]</a>}
          {links.arxiv && <a href={links.arxiv} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 hover:underline transition-colors">[arXiv]</a>}
          {links.conference && <a href={links.conference} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 hover:underline transition-colors">[Conference]</a>}
        </div>
      )}
    </article>
  );
};

export default PublicationItem;