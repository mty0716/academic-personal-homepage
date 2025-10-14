import React from 'react';
import type { Project } from '../types';
import Icon from './Icon';

interface ProjectItemProps {
  project: Project;
  language: 'en' | 'zh';
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, language }) => {
  const { title, fundingSource, period, role, description, title_en, fundingSource_en, role_en, description_en } = project;

  const hasTranslation = language === 'en' && title_en;
  const displayTitle = hasTranslation ? title_en : title;
  const displayFundingSource = hasTranslation ? (fundingSource_en || fundingSource) : fundingSource;
  const displayRole = hasTranslation ? (role_en || role) : role;
  const displayDescription = hasTranslation ? (description_en && description_en.length > 0 ? description_en : description) : description;


  return (
    <article className="text-lg leading-relaxed">
      <h3 className="text-xl font-semibold text-slate-900 flex items-baseline flex-wrap">
        <span>{displayTitle}</span>
        {hasTranslation && (
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 ml-2 font-normal">
                <Icon type="translate" className="w-4 h-4" />
                <span>Translation</span>
            </span>
        )}
      </h3>
      <div className="text-lg text-slate-600 mt-2 flex flex-wrap gap-x-4">
        <span>{displayRole}</span>
        <span className="text-slate-400">|</span>
        <span className="font-mono">{period}</span>
      </div>
      <p className="text-lg text-slate-500 italic mt-2">{displayFundingSource}</p>
      
      {displayDescription && displayDescription.length > 0 && (
        <ul className="mt-3 list-disc list-inside text-lg text-slate-700 space-y-2">
          {displayDescription.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ProjectItem;