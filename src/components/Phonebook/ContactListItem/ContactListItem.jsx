// import PropTypes from "prop-types";

function ContactListItem({ item, onRemove }) {
  const { id, name, number } = item;
  return (
    <li key={id}>
      <span>{name}</span>: <span>{number}</span>
      <button type="button" onClick={() => onRemove(id)}>
        Delete
      </button>
    </li>
  );
}

// ContactListItem.propTypes = {
//   list: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onRemove: PropTypes.func.isRequired,
// };

export default ContactListItem;
