import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export default function Contacts({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.list}>
      <div className={css.item}>
        <h2 className={css.name}>
          <IoPerson className={css.icon} />
          {name}
        </h2>
        <p className={css.number}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button
        className={css.delete}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
