import { IContact } from './types';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { 
  faMobileAlt, 
  faMapMarkerAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

export const contacts: IContact[] = [
  {icon: faMapMarkerAlt, text: 'Rua Pascoal da Ribeira, 398 - 04437-090 - São Paulo/SP', link: 'https://www.google.com.br/maps/place/Rua+Pascoal+da+Ribeira,+398+-+Jardim+Consorcio,+S%C3%A3o+Paulo+-+SP,+04437-090/@-23.674796,-46.6752955,17z/data=!4m5!3m4!1s0x94ce5001981fb5d3:0xf2c805ab90c3d4f5!8m2!3d-23.6745651!4d-46.6742226?shorturl=1'},
  {icon: faMobileAlt, text: '+55 11 9 5555 4845', link: 'tel:5511955554845'},
  {icon: faEnvelope, text: 'alecell.dev@gmail.com', link: 'mailto:alecell.dev@gmail.com'},
  {icon: faLinkedinIn, text: 'linkedin.com/in/alecell/', link: 'https://www.linkedin.com/in/alecell/'},
  {icon: faGithub, text: 'github.com/Alecell', link: 'https://github.com/Alecell'},
]