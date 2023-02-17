import { Component } from 'react';
import PropTypes from 'prop-types';

import { Contact } from 'components/Contact';
import { Contacts } from './ContactList.styled';

export class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <Contacts>
        {contacts.map(({ id, name, number }) => (
          <Contact
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
            key={id}
          />
        ))}
      </Contacts>
    );
  }
}
