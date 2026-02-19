
export enum Screen {
  DASHBOARD = 'DASHBOARD',
  EDITOR = 'EDITOR',
  ASSISTANT = 'ASSISTANT',
  GALLERY = 'GALLERY',
  IMPORT = 'IMPORT',
  DESIGNER = 'DESIGNER',
  TUTORIAL = 'TUTORIAL',
  PUBLISH = 'PUBLISH'
}

export interface Project {
  id: string;
  name: string;
  lastModified: string;
  thumbnail?: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tech: string;
}
