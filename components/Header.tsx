import React from 'react';
import Image from 'next/image';
import Icon from './Icon';

interface PersonalInfo {
    name: string;
    title: string;
    affiliation: string;
    email: string;
    links: {
        googleScholar?: string;
        linkedIn?: string;
        github?: string;
        twitter?: string;
    };
    imageUrl: string;
}

interface HeaderProps {
  info: PersonalInfo;
  language: 'en' | 'zh';
  setLanguage: (language: 'en' | 'zh') => void;
}

const Header: React.FC<HeaderProps> = ({ info, language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="relative flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
      <div className="absolute top-0 right-0">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-sm font-semibold text-slate-600 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Switch language"
          >
            {language === 'en' ? '中文' : 'English'}
          </button>
      </div>
      <div className="flex-shrink-0">
        <Image 
          src={info.imageUrl} 
          alt={info.name} 
          width={144}
          height={144}
          className="rounded-full object-cover shadow-lg border-4 border-white"
          priority
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-slate-900">{info.name}</h1>
        <h2 className="text-xl text-sky-700 font-medium mt-1">{info.title}</h2>
        <p className="text-lg text-slate-600 mt-2">{info.affiliation}</p>
        
        <div className="mt-4 flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 text-slate-500">
            <a href={`mailto:${info.email}`} className="flex items-center space-x-1.5 hover:text-sky-600 transition-colors">
                <Icon type="email" />
                <span>Email</span>
            </a>
            {info.links.googleScholar && (
                <a href={info.links.googleScholar} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-sky-600 transition-colors">
                    <Icon type="scholar" />
                    <span>Scholar</span>
                </a>
            )}
            {info.links.linkedIn && (
                <a href={info.links.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-sky-600 transition-colors">
                    <Icon type="linkedin" />
                    <span>LinkedIn</span>
                </a>
            )}
            {info.links.github && (
                <a href={info.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-sky-600 transition-colors">
                    <Icon type="github" />
                    <span>GitHub</span>
                </a>
            )}
             {info.links.twitter && (
                <a href={info.links.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-sky-600 transition-colors">
                    <Icon type="twitter" />
                    <span>Twitter</span>
                </a>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;