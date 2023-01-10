import { faUser } from '@fortawesome/free-solid-svg-icons';

import AsideTitle from '../AsideTitle/AsideTitle';

import scss from './AboutMe.module.scss';

function AboutMe() {
  return (
    <section className={scss.container}>
      <AsideTitle title='about me' icon={faUser} />
      <p className={scss.text}>
        Front-end engineer focused on business problem solving. 
        <br /><br />
        Specialties: Web/software development with React, HTML, CSS, Javascript, Clean Code, Fluid Layout and Scalable Architecture.
      </p>
    </section>
  );
}

export default AboutMe;
