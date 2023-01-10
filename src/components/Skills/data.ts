import { ISkill } from './types';
import { faJs, faCss3Alt, faHtml5, faReact, faGit, faLinux } from '@fortawesome/free-brands-svg-icons';


export const skills: ISkill[] = [
  { icon: faJs, name: 'Javascript', proficiency: 90 },
  { icon: faCss3Alt, name: 'CSS', proficiency: 90 },
  { icon: faHtml5, name: 'HTML', proficiency: 90 },
  { icon: faReact, name: 'ReactJS', proficiency: 80 },
  { icon: faLinux, name: 'Linux', proficiency: 45 },
  { icon: faGit, name: 'Git', proficiency: 70 },
]