import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import scss from './History.module.scss';

import { IHistoryProps } from './types';

function History(props: IHistoryProps) {
  const renderHistory = () => props.history.map((record) => (
    <div className={scss.record}>
      <h3 className={scss.recordTitle}>{record.title}</h3>
      <div className={scss.details}>
        <a className={scss.place} href={record.placeLink}>
          <FontAwesomeIcon icon={props.locationIcon} />
          <span className={scss.placeName}>{record.placeName}</span>
        </a>
        <span className={scss.duration}>
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span className={scss.text}>{record.duration}</span>
        </span>
      </div>
      <p className={scss.description} dangerouslySetInnerHTML={{__html: record.description}} />
    </div>
  ));

  return (
    <section className={scss.container}>
      <div className={scss.iconContainer}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className={scss.content}>
        <h2 className={scss.title}>{props.title}</h2>
        {renderHistory()}
      </div>
    </section>
  )
}

export default History;
