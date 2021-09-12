import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ getContacts, deleteContactFromList }) => {
  return (
    <div className={s.container}>
      <ul>
        {getContacts.map(item => (
          <li key={item.id} className={s.item}>
            <span>
              {item.name}: {item.number}
            </span>
            <button
              className={s.btn}
              type="submit"
              onClick={() => deleteContactFromList(item)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  getContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
