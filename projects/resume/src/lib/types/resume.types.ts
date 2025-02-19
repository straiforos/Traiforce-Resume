export interface Basics {
  name: string;
  image: string;
  label: string;
  email: string;
  phone: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}

export interface Location {
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface WorkExperience {
  name: string;
  company: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  score: string;
  courses: string[];
}

export interface Skill {
  name: string;
  level: string;
  keywords: string[];
}

export interface Interest {
  name: string;
  keywords: string[];
}

export interface Project {
  name: string;
  description: string;
  keywords: string[];
  role: string[];
  entity: string;
  url: string;
  type: string;
}

export interface Resume {
  basics: Basics;
  work: WorkExperience[];
  education: Education[];
  skills: Skill[];
  interests: Interest[];
  projects: Project[];
}
