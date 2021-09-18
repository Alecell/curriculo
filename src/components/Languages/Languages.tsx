import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { languages } from './data';
import { ILanguage, ILanguagesProps } from './types';

import scss from './Languages.module.scss';


function Languages(props: ILanguagesProps) {


  const renderStars = (level: ILanguage['level']) => new Array(level).fill(null).map(() => (
    <FontAwesomeIcon className={scss.icon} icon={faStar} />
  )) 

  const renderLanguages = () => languages.map((language, index) => (
    <div className={scss.language} key={index}>
      <div className={scss.imageContainer}>
        <img className={scss.image} src={language.flag} alt='language flag' />
      </div>
      <span className={scss.name}>{language.name}</span>
      <div className={scss.levelContainer}>
        {renderStars(language.level)}
      </div>
      <span className={scss.desc}>{language.description}</span>
    </div>
  ));

  return (
    <section className={scss.container}>
      <div className={scss.iconContainer}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className={scss.content}>
        <h2 className={scss.title}>{props.title}</h2>
        <div className={scss.languagesWrap}>
          {renderLanguages()}
        </div>
      </div>
    </section>
  )
}

export default Languages;
