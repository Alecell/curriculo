import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IAsideTitleProps } from './types';

import scss from './AsideTitle.module.scss';

function AsideTitle(props: IAsideTitleProps) {
  return (
    <div className={scss.container}>
      <div className={scss.iconContainer}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <h2 className={scss.title}>
        {props.title}
      </h2>
    </div>
  );
}

export default AsideTitle;
