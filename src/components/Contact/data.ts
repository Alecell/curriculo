import { IContact } from './types';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { 
  faMapMarkerAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

export const contacts: IContact[] = [
  {icon: faMapMarkerAlt, text: 'São Paulo, Brazil', link: 'https://www.google.com.br/maps/place/S%C3%A3o+Paulo/@-22.5028401,-53.2550099,7z/data=!3m1!4b1!4m13!1m7!3m6!1s0x94ce448183a461d1:0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!3b1!8m2!3d-23.5557714!4d-46.6395571!3m4!1s0x94ce597d462f58ad:0x1e5241e2e17b7c17!8m2!3d-22.3805555!4d-49.0003967'},
  {icon: faEnvelope, text: 'alecell.dev@gmail.com', link: 'mailto:alecell.dev@gmail.com'},
  {icon: faLinkedinIn, text: 'linkedin.com/in/alecell/', link: 'https://www.linkedin.com/in/alecell/'},
  {icon: faGithub, text: 'github.com/Alecell', link: 'https://github.com/Alecell'},
]