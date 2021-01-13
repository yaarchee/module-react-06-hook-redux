import React from 'react';
import CreateContactsForm from './CreateContactsForm/CreateContactsForm';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import styles from './PhoneBook.module.css';
import { getContacts } from '../../redux/phoneBook/phoneBooksSelectors';

function PhoneBook() {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <>
      <div className={styles.wrapSections}>
        <h2>Hooks</h2>
        <Section>
          <h2>Phonebook</h2>
          <CreateContactsForm />
        </Section>
        {contacts?.length > 0 && (
          <Section>
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </Section>
        )}
      </div>
    </>
  );
}

export default PhoneBook;
