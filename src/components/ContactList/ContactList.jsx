import Contacts from "../Contacts/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contacts data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
