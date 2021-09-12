import PropTypes from 'prop-types';
import s from '../contactForm/ContactForm.module.css';

const FilterByName = ({ filter, nameFinder }) => {
  return (
    <div className={s.container}>
      <p className={s.label}>Find contacts by name</p>
      <input
        type="text"
        className={s.input}
        placeholder="find contact"
        onChange={nameFinder}
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
    </div>
  );
};

FilterByName.propTypes = {
  filter: PropTypes.string.isRequired,
  nameFinder: PropTypes.func,
};

export default FilterByName;
