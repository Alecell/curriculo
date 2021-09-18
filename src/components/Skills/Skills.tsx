import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

import AsideTitle from '../AsideTitle/AsideTitle';

import { skills } from './data';

import scss from './Skills.module.scss';

function Skills() {
  const renderBar = (level: number) => {
    return (
      <div className={scss.barContainer}>
        <div className={scss.progress} style={{width: `${level}%`}} />
      </div>
    )
  };

  const renderSkills = () => skills.map(skill => (
    <div className={scss.skill}>
      <div className={scss.iconContainer}>
        <FontAwesomeIcon icon={skill.icon} />
      </div>
      <div className={scss.content}>
        <span className={scss.name}>{skill.name}</span>
        {renderBar(skill.proficiency)}
      </div>
    </div>
  ))

  return (
    <section className={scss.container}>
      <AsideTitle title='skills' icon={faTools} />
      {renderSkills()}
    </section>
  );
}

export default Skills;
