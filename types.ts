import React from 'react';

export type PublicationType = 'journal' | 'patent' | 'software' | 'monograph';

export interface Project {
  title: string;
  title_en?: string;
  fundingSource: string;
  fundingSource_en?: string;
  period: string;
  role: string;
  role_en?: string;
  description: string[];
  description_en?: string[];
}

export interface Publication {
  title: string;
  title_en?: string;
  authors: string[];
  authors_en?: string[];
  venue: string;
  venue_en?: string;
  year: number;
  links: {
    pdf?: string;
    doi?: string;
    code?: string;
    presentation?: string;
    arxiv?: string;
    conference?: string;
  };
  metrics?: {
    en: string;
    zh: string;
  };
}

export interface Experience {
  role: string;
  institution: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
  supervisor?: string;
}