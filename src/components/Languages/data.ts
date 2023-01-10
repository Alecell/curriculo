import { ILanguage } from './types';

import euaFlag from './images/bandeira-eua.jpg';
import spainFlag from './images/spanish.png';
import brazilFlag from './images/brazil.png';

export const languages: ILanguage[] = [
  { flag: brazilFlag, name: 'Portuguese', description: 'Native', level: 5 },
  { flag: euaFlag, name: 'English', description: 'Technical Advanced', level: 4 },
  { flag: spainFlag, name: 'Spanish', description: 'Beginner', level: 2 },
]