import { faBriefcase, faBuilding, faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { IHistoryProps } from './components/History/types';

export const job: IHistoryProps = {
  title: 'PROFESSIONAL EXPERIENCE',
  icon: faBriefcase,
  locationIcon: faBuilding,
  history: [
    { 
      title: 'FRONT-END ENGINEER',
      placeName: 'Afya',
      placeLink: 'https://www.afya.com.br/',
      duration: 'Aug 2020 - Current',
      description: `
        Responsible for the team that handle directly the marketing requests and others needs focused on front-end.
        <br /><br />
        Responsibilities: Direct the team to solve the marketing demands, architect front-end projects, technically manage new projects, develop emails and pages to marketing campaigns, besides maintain and ensure resilience of the already done and legacy projects.
      `
    },
    { 
      title: 'FRONT-END ENGINEER',
      placeName: 'NEWCORE',
      placeLink: 'https://www.newcore.com.br/',
      duration: 'Apr 2019 - Aug 2020',
      description: `
        Developer and maintainer of the NEWCORE product, for realtors and real state buyers, using React/Redux/Typescript/NextJS.
        <br /><br />
        Responsibilities: Add new features and maintain the NEWCORE product as front-end leader.
      `
    },
    { 
      title: 'FRONT-END DEVELOPER',
      placeName: 'EDS',
      placeLink: 'https://www.extremedigital.com.br/eds/',
      duration: 'June 2018 - Jan 2019',
      description: `
        Developer of applications for Brazil states courts with React, Redux, SASS and other technologies.
        <br /><br />
        Responsibilities: Develop and maintain the the front-end of the products, mainly with the NOMIKOS team. I've also participated actively on the propose of new features and business rules.
      `
    },
    { 
      title: 'FULL-STACK DEVELOPER',
      placeName: 'StarShine',
      placeLink: 'https://starshine.com.br/',
      duration: 'May 2017 - June 2018',
      description: `
        End-to-end development of responsive websites and applications including lead capture, form sender, login, A/B tests and loading speed optimization.
        <br /><br />
        On this position I also was responsible for bringing new technologies to improve the productivity of the whole company.
      `
    },
    { 
      title: 'FRONT-END DEVELOPER',
      placeName: 'StarShine',
      placeLink: 'https://starshine.com.br/',
      duration: 'Dec 2016 - May 2017',
      description: `
        Layout and functionalities of websites, helping with the decision business strategy of sites, email marketing development and maintain existing products.
      `
    }
  ]
}

export const study: IHistoryProps = {
  title: 'EDUCATION',
  icon: faGraduationCap,
  locationIcon: faUniversity,
  history: [
    { 
      title: 'COMPUTER SCIENCE',
      placeName: 'SENAC',
      placeLink: 'https://www.sp.senac.br/graduacao/',
      duration: 'Feb 2015 - Dec 2016 - Incomplete',
      description: `
        Within Computer Science College I learn very much about math, computation and code deeply. The programming language used on the course was C. 
        <br /><br />
        The course was interrupted because of the hight debt we had with the university, at that point we could not afford it anymore and I have to left the college.
      `
    },
    { 
      title: 'DIGITAL GAMES',
      placeName: 'SENAC',
      placeLink: 'https://www.sp.senac.br/graduacao/',
      duration: 'Feb 2013 - Dec 2014 - Incomplete',
      description: `
        During the Digital Games Technologies course I had my first meet with a programming language, the language was C/C++ and all the games that we've made was on this language.
        Besides the name of the course, it was mostly focused on programming instead of the other areas that game development has. 
        <br /><br />
        Due to a personal healthy problem I've needed to leave the course and take 2014 to solve my healthy issues before return to the college.
      `
    }
  ]
}
