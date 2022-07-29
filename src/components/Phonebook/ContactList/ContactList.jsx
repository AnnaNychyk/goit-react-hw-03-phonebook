// import PropTypes from "prop-types";
// import styles from "./ContactList.module.css";
import ContactListItem from "../ContactListItem/ContactListItem";

function ContactList({ list, onRemove }) {
  return (
    <ul>
      {list.map((list) => (
        <ContactListItem key={list.id} item={list} onRemove={onRemove} />
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   onRemove: PropTypes.func.isRequired,
// };

export default ContactList;
