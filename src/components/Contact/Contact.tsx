import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

import AsideTitle from '../AsideTitle/AsideTitle';

import { contacts } from './data';

import scss from './Contact.module.scss';

function Contact() {
  const renderContact = () => contacts.map(contact => (
    <div className={scss.contact}>
      <div className={scss.iconContainer}>
        <FontAwesomeIcon icon={contact.icon} />
      </div>
      <a className={scss.link} href={contact.link}>{contact.text}</a>
    </div>
  ))

  return (
    <section className={scss.container}>
      <AsideTitle title='contact' icon={faAddressBook} />
      {renderContact()}
    </section>
  );
}

export default Contact;
