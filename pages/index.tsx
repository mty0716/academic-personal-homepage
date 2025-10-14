
import React, { useState } from 'react';
import Head from 'next/head';

// Import components
import Header from '../components/Header';
import Section from '../components/Section';
import ProjectItem from '../components/ProjectItem';
import PublicationItem from '../components/PublicationItem';
import FoldableList from '../components/FoldableList';

// Import data and types
import { CONTENT, PROJECTS_DATA, PUBLICATIONS_DATA } from '../constants';
import type { Education, Experience, Publication, Project } from '../types';

const HomePage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');
  const content = CONTENT[language];
  const personalInfo = CONTENT[language].personalInfo;
  const highlightNames = ["Ma Tianyue", "马天跃", "Tianyue Ma"];

  return (
    <>
      <Head>
        <title>{personalInfo.name} - 个人主页</title>
        <meta name="description" content={`Academic personal homepage for ${personalInfo.name}`} />
        <meta name="keywords" content="马天跃, 学术主页, 博士生, 测绘科学, 遥感, 地理信息" />
        <meta name="author" content="马天跃" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 font-sans">
        <main className="space-y-12">
          <Header info={personalInfo} language={language} setLanguage={setLanguage} />

          {/* About Me */}
          <Section title={content.aboutMe.title}>
            <p className="text-lg leading-relaxed text-slate-700">{content.aboutMe.body}</p>
          </Section>

          {/* Research Interests */}
          <Section title={content.researchInterests.title}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {content.researchInterests.list.map((interest, index) => (
                <div 
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4 hover:bg-slate-100 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-slate-500 font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 leading-relaxed">
                    {interest}
                  </h3>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title={content.education.title}>
             {/* Timeline for first 4 education items */}
             <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300"></div>
                {content.education.list.slice(0, 4).map((edu: Education, index: number) => (
                   <div key={index} className="relative flex items-start mb-6 last:mb-0">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0 w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                      
                      {/* Content */}
                      <div className="ml-6 flex-1">
                         <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{edu.degree}</h3>
                            <p className="text-base text-slate-600 mb-1">{edu.institution}</p>
                            <p className="text-sm text-slate-500 font-mono mb-1">{edu.year}</p>
                            {edu.supervisor && (
                               <p className="text-sm text-slate-500 italic">{edu.supervisor}</p>
                            )}
                         </div>
                      </div>
                   </div>
                ))}
             </div>
             <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4 border-t pt-6">{content.education.overseasTitle}</h3>
             <div className="space-y-6">
                {content.education.overseasList.map((edu: Education, index: number) => (
                     <div key={index}>
                        <h3 className="text-lg font-semibold text-slate-900">{edu.degree}</h3>
                        <p className="text-md text-slate-600">{edu.institution}</p>
                        <p className="text-sm text-slate-500 font-mono">{edu.year}</p>
                        {edu.supervisor && <p className="text-sm text-slate-500 italic mt-1">{edu.supervisor}</p>}
                    </div>
                ))}
             </div>
          </Section>

          {/* Achievements */}
          <Section title={content.achievements.title}>
            {/* Journal Papers */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{content.achievements.journalPapers.title}</h3>
                <div className="space-y-8">
                    {/* First Author */}
                    <h4 className="font-bold text-sky-800">{content.achievements.journalPapers.firstAuthor}</h4>
                    {PUBLICATIONS_DATA.firstAuthor.map((pub: Publication) => (
                        <PublicationItem key={pub.title} publication={pub} highlightNames={highlightNames} language={language} type="journal" />
                    ))}
                    {/* Supervisor First */}
                    <h4 className="font-bold text-sky-800 pt-4 border-t">{content.achievements.journalPapers.supervisorFirst}</h4>
                     {PUBLICATIONS_DATA.supervisorFirst.map((pub: Publication) => (
                        <PublicationItem key={pub.title} publication={pub} highlightNames={highlightNames} language={language} type="journal" />
                    ))}
                    {/* Co-authored */}
                    <h4 className="font-bold text-sky-800 pt-4 border-t">{content.achievements.journalPapers.coAuthored}</h4>
                     <FoldableList
                        items={PUBLICATIONS_DATA.other}
                        initiallyVisible={1}
                        renderItem={(pub: Publication, index: number) => (
                          <PublicationItem key={index} publication={pub} highlightNames={highlightNames} language={language} type="journal" />
                        )}
                        buttonTexts={{ showMore: content.achievements.showMore, showLess: content.achievements.showLess }}
                    />
                </div>
            </div>
            
             {/* Patents */}
            <div className="mb-8 pt-6 border-t">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{content.achievements.patents.title}</h3>
                <FoldableList
                    items={PUBLICATIONS_DATA.patents}
                    initiallyVisible={1}
                    renderItem={(pub: Publication, index: number) => (
                        <PublicationItem key={index} publication={pub} highlightNames={highlightNames} language={language} type="patent" />
                    )}
                    buttonTexts={{ showMore: content.achievements.showMore, showLess: content.achievements.showLess }}
                />
            </div>
            
            {/* Software Copyrights */}
            <div className="mb-8 pt-6 border-t">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{content.achievements.softwareCopyrights.title}</h3>
                <FoldableList
                    items={PUBLICATIONS_DATA.softwareCopyrights}
                    initiallyVisible={1}
                    renderItem={(pub: Publication, index: number) => (
                        <PublicationItem key={index} publication={pub} highlightNames={highlightNames} language={language} type="software" />
                    )}
                    buttonTexts={{ showMore: content.achievements.showMore, showLess: content.achievements.showLess }}
                />
            </div>

            {/* Monographs */}
            <div className="pt-6 border-t">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{content.achievements.monographs.title}</h3>
                <div className="space-y-8">
                    {PUBLICATIONS_DATA.monographs.map((pub: Publication, index: number) => (
                        <PublicationItem key={index} publication={pub} highlightNames={highlightNames} language={language} type="monograph" />
                    ))}
                </div>
            </div>

          </Section>
          
          {/* Research Projects */}
          <Section title={content.projects.title}>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">{content.projects.vertical}</h3>
            <FoldableList
                items={PROJECTS_DATA.vertical}
                initiallyVisible={1}
                renderItem={(project: Project, index: number) => (
                  <ProjectItem key={index} project={project} language={language} />
                )}
                buttonTexts={{ showMore: content.achievements.showMore, showLess: content.achievements.showLess }}
            />
            <h3 className="text-xl font-semibold text-slate-800 mb-4 border-t pt-6">{content.projects.horizontal}</h3>
            <div className="space-y-8">
               <FoldableList
                items={PROJECTS_DATA.horizontal}
                initiallyVisible={1}
                renderItem={(project: Project, index: number) => (
                  <ProjectItem key={index} project={project} language={language} />
                )}
                buttonTexts={{ showMore: content.achievements.showMore, showLess: content.achievements.showLess }}
              />
            </div>
          </Section>
          
          {/* Internship Experience */}
          <Section title={content.experience.title}>
            <div className="space-y-8">
              {content.experience.list.map((exp: Experience, index: number) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-slate-900">{exp.role}</h3>
                  <div className="text-md text-slate-600 mt-1 flex flex-wrap gap-x-4">
                    <span>{exp.institution}</span>
                    <span className="text-slate-400">|</span>
                    <span className="font-mono">{exp.period}</span>
                  </div>
                  <p className="mt-2 text-base text-slate-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </Section>
        </main>

        <footer className="text-center text-slate-500 mt-12 py-6 border-t border-slate-200">
            <p>{content.footer.copyright}</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
