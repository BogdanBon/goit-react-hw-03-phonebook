import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    let nameId = uuidv4();
    const updatedState = {
      id: nameId,
      name: this.state.name,
      number: this.state.number,
    };

    this.props.handlerFormSubmit(updatedState);

    this.setState({
      filter: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={s.container} onSubmit={this.handleSubmitForm}>
        <label className={s.label} htmlFor="inputName">
          Name
        </label>
        <input
          className={s.input}
          placeholder="e.g. Elon Musk"
          type="text"
          id="inputName"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label className={s.label} htmlFor="inputPhone">
          Phone number
        </label>
        <input
          className={s.input}
          placeholder="e.g. +1 310-363-6000 "
          id="inputPhone"
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handlerFormSubmit: PropTypes.func,
};

export default ContactForm;
