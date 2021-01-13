import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../../redux/phoneBook/phoneBooksSelectors';

import actionsBook from '../../../redux/phoneBook/phoneBookActions';

function ContactList() {
  const dispatch = useDispatch();
  const contact = useSelector(getFilteredContacts);

  const removeContact = (id) => {
    dispatch(actionsBook.deleteContact(id));
  };

  return (
    <ul className={styles.contactList}>
      {contact.map(({ id, name, tel }) => (
        <ListItem
          key={id}
          name={name}
          phone={tel}
          onRemove={() => removeContact(id)}
        />
      ))}
    </ul>
  );
}

export default ContactList;
