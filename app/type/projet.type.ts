export interface ProjetImage {
  image: string;
  alt: string;
}

export interface ProjetParagraphe {
  paragraphe: string;
}

export interface ProjetLink {
  linksite: string;
  linkname: string;
}

export interface ProjetTechnologie {
  technologie: string;
}

export interface ProjetCompetence {
  competence: string;
}

export type Projet = {
  id: number;
  title: string;
  date: string;
  text: string;
  description: string;
  image: string;
  images: ProjetImage[];
  paragraphes: ProjetParagraphe[];
  links: ProjetLink[];
  technologies: ProjetTechnologie[];
  competences: ProjetCompetence[];
};
