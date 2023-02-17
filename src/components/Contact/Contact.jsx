import { Component } from 'react';

import { Item, Name, Number, DeleteBtn } from './Contact.styled';

export class Contact extends Component {
  render() {
    const { id, name, number, onDeleteContact } = this.props;

    return (
      <Item>
        <Name>{name}: </Name>
        <Number>{number}</Number>
        <DeleteBtn
          type="button"
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </DeleteBtn>
      </Item>
    );
  }
}
