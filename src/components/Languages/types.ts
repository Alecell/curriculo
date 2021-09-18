import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ILanguage {
  flag: string;
  name: string;
  description: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface ILanguagesProps {
  title: string;
  icon: IconDefinition;
}